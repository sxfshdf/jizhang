import Layout from "../components/Layout"
import React, {useState} from "react"
import {CategorySelector} from 'components/CategorySelector'
import styled from "styled-components"
import {useTags} from "../hooks/useTags"
import {RecordItem, useRecords} from "../hooks/useRecords"
import day from 'dayjs'

const CategoryWrapper = styled.div`
  background: #fff;
`
const Item = styled.div`
  background: #fff;
  > header {
    display: flex;
    justify-content: space-between;
    background: #ddd;
    font-size: 18px;
    padding: 10px 16px;
  }
  > ul {
  font-size: 16px;
    > li {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: none;
      }
      > section {
        display: flex;
        padding: 10px 16px;
        justify-content: space-between;
        > .head {
          flex-shrink: 0;
          margin-right: 10px;
          color: #666;
        }
        > .noteContent {
          color: #666;
        }
        > .tags {
          margin-right: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {getTagNames} = useTags()
  const {records} = useRecords()
  let newRecords: {[K: string]: RecordItem[]} = {}
  records.forEach(r => {
    const key = day(r.createAt).format('YYYY-MM-DD')
    if (newRecords[key] === undefined) {
      newRecords[key] = []
    }
    newRecords[key].push(r)
  })
  const groupRecords = Object.entries(newRecords)
  // 计算总金额
  const calcAmout = (array: RecordItem[]) => {
    let result = 0
    array.forEach(item => {
      result = result + item.amount
    })
    return result
  }
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySelector value={category}
                          onChange={(category) => setCategory(category)}>
        </CategorySelector>
        {groupRecords && groupRecords.map((r, index) => {
          return (
            <Item key={index}>
              <header>
                <span>
                  {r[0]}
                </span>
                <span>￥{calcAmout(r[1])}</span>
              </header>
              <ul>
                {r[1].map(item => {
                  return <li key={item.createAt}>
                    <section className="content">
                      <div className="tags">{getTagNames(item.tagIds)}</div>
                      <div>￥{item.amount}</div>
                    </section>
                    {/*{item.note === '' || item.note === undefined ? null : (*/}
                      <section className="note">
                        <div className="head">备注</div>
                        <div className="noteContent">{item.note}</div>
                      </section>
                    {/*)}*/}
                  </li>
                })}
              </ul>
            </Item>
          )
        })}
      </CategoryWrapper>
    </Layout>
  )
}

export default Statistics
