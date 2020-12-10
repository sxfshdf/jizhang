import Layout from "../components/Layout"
import React from "react"
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
  return (
    <MyLayout>
      <SectionTags />
      <SectionNote />
      <SectionCategory />
      <SectionNumber />
    </MyLayout>
  )
}

export default Money
