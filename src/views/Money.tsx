import Layout from "../components/Layout"
import React, {useState} from "react"
import styled from "styled-components"
import {SectionTags} from "./Money/SectionTags"
import {SectionNote} from "./Money/SectionNote"
import {SectionNumber} from "./Money/SectionNumber"
import {SectionCategory} from "./Money/SectionCategory"

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as (number[]),
    note: '',
    category: '-' as ('+' | '-'),
    amount: 0
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      {selected.tagIds.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <SectionTags value={selected.tagIds}
                   onChange={(tagIds => onChange({tagIds}))}/>
      <SectionNote value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <SectionCategory value={selected.category}
                       onChange={(category) => onChange({category})}/>
      <SectionNumber value={selected.amount}
                     onOk = {() => {}}
                     onChange={(amount) => onChange({amount})}/>
    </MyLayout>
  )
}

export default Money
