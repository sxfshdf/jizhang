import Layout from "../components/Layout"
import React from "react"
import styled from "styled-components"
import {SectionTags} from "./Money/SectionTags"
import {SectionNotes} from "./Money/SectionNotes"
import {SectionNumber} from "./Money/SectionNumber"
import {SectionCategory} from "./Money/SectionCategory"

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <SectionTags>

      </SectionTags>
      <SectionNotes>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请在此添加备注"/>
        </label>
      </SectionNotes>
      <SectionCategory>
        <ul>
          <li className="selected">收入</li>
          <li>支出</li>
        </ul>
      </SectionCategory>
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
