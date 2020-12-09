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
      <SectionNumber>
        <div className="output">100</div>
        <div className="pad clearFix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className='zero'>0</button>
          <button>.</button>
        </div>
      </SectionNumber>
    </MyLayout>
  )
}

export default Money
