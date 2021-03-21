import Layout from "../components/Layout"
import React, {useState} from "react";
import styled from "styled-components"
import {SectionTags} from "./Money/SectionTags"
import {SectionNote} from "./Money/SectionNote"
import {SectionNumber} from "./Money/SectionNumber"
import {CategorySelector} from "components/CategorySelect"
import {useRecords} from "../hooks/useRecords"
// import {X} from 'components/X'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const CategoryWrapper = styled.div`
  background: #fff;
`
const SectionTagsWrapper = styled.div`
  overflow: auto;
  height: calc(100% - 434px);
`
const defaultSelected = {
  tagIds: [] as (number[]),
  note: '',
  category: '-' as ('+' | '-'),
  amount: '0'
}

function Money() {
  const [selected, setSelected] = useState(defaultSelected)
  const {addRecords} = useRecords()
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
    // setSelected(state=> {
    //   console.log(state, 'state')
    //   return {
    //     ...state,
    //   }
    // })
  }
  const addRecord = () => {
    const newSelected = {...selected, amount: parseFloat(selected.amount)}
    const check = addRecords(newSelected)
    if (check) {
      window.alert('保存成功')
      setSelected(defaultSelected)
    }
  }
  return (
    <MyLayout title="每日记账" category={selected.category}>
      <CategoryWrapper>
        <CategorySelector value={selected.category}
                          onChange={(category) => onChange({category})}/>
      </CategoryWrapper>
      <SectionTagsWrapper>
        <SectionTags value={selected.tagIds}
                     onChange={(tagIds => onChange({tagIds}))}/>
      </SectionTagsWrapper>
      <SectionNote value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <SectionNumber value={selected.amount}
                     onOk={addRecord}
                     onChange={(amount: string) => onChange({amount})}/>
    </MyLayout>
  )
}

export default Money
