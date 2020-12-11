import Layout from "../components/Layout"
import React, {useState} from "react"
import styled from "styled-components"
import {SectionTags} from "./Money/SectionTags"
import {SectionNote} from "./Money/SectionNote"
import {SectionNumber} from "./Money/SectionNumber"
import {SectionCategory} from "./Money/SectionCategory"
import {useRecords} from "../hooks/useRecords"

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
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
      <SectionTags value={selected.tagIds}
                   onChange={(tagIds => onChange({tagIds}))}/>
      <SectionNote value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <SectionCategory value={selected.category}
                       onChange={(category) => onChange({category})}/>
      <SectionNumber value={selected.amount}
                     onOk = {addRecord}
                     onChange={(amount:string) => onChange({amount})}/>
    </MyLayout>
  )
}

export default Money
