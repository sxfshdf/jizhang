import Layout from "../components/Layout"
import React, {useState} from "react"
import styled from "styled-components"
import {SectionTags} from "./Money/SectionTags"
import {SectionNote} from "./Money/SectionNote"
import {SectionNumber} from "./Money/SectionNumber"
import {CategorySelector} from "components/CategorySelector"
import {useRecords} from "../hooks/useRecords"
import {X} from 'components/X'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const CategoryWrapper = styled.div`
  background: #ddd;
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
    <MyLayout>
      <X visible={false} onClose={() => console.log('close')} onConfirm={() => console.log('confirm')}>
        <div>
          Content
        </div>
      </X>
      <SectionTags value={selected.tagIds}
                   onChange={(tagIds => onChange({tagIds}))}/>
      <SectionNote value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <CategoryWrapper>
        <CategorySelector value={selected.category}
                          onChange={(category) => onChange({category})}/>
      </CategoryWrapper>
      <SectionNumber value={selected.amount}
                     onOk={addRecord}
                     onChange={(amount: string) => onChange({amount})}/>
    </MyLayout>
  )
}

export default Money
