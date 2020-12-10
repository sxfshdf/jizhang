import Layout from "../components/Layout"
import React from "react"
import {useTags} from "useTags"
import styled from "styled-components"
import Icon from "../components/Icon"

const TagList = styled.ul`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #ddd;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .icon {
       height: 20px;
       width: 20px;
       flex-shrink: 0;
    }
  }
`
const Button = styled.button`
  font-size: 14px;
  padding: 8px 18px;
  background: #ddd;
  border: none;
  margin: auto;
  border-radius: 4px;
`
const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`
function Tags() {
  const {tags, setTags} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="one-line">{tag}</span>
            <Icon name="arrow-right" />
          </li>
        )}
      </TagList>
      <CenterBox>
        <Button>新增标签</Button>
      </CenterBox>
    </Layout>
  )
}

export default Tags
