import Layout from "../components/Layout"
import React from "react"
import styled from "styled-components"

const SectionTags = styled.section`
 background: #fff;
 padding: 12px 16px;
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 justify-content: flex-end;
 align-items: flex-start;
 > ul {
   margin: 0 -8px;
    > li {
      background: #ddd;
      display: inline-block;
      border-radius: 2px;
      padding: 4px 16px;
      margin: 0 8px;
    }
 }
 button {
  background: none;
  border: none;
  border-bottom: 1px solid #888;
  padding: 2px 6px;
  color: #666;
  margin-top: 12px;
 }
`

const SectionNotes = styled.section`
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 8px;
    }
    > input {
      flex-grow: 1;
      height: 72px;
      border: none;
      background: none;
    }
  }
`

const SectionCategory = styled.section`
 > ul {
  display: flex;
  > li {
    width: 50%;
    text-align: center;
    font-size: 20px;
    padding: 20px 0;
    position: relative;
    &.selected:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: #333;
      }
    }
 }
`

const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    font-size: 32px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -4px 4px -4px rgba(0,0,0,.25), 
                inset 0 4px 4px -4px rgba(0,0,0,.25)
    ;
  }
  > .pad {
    > button {
      width: 25%;
      height: 64px;
      float: left;
      border: none;
      border: 1px solid #ddd;
      &.ok {
        float: right;
        height: 128px;
      }
      &.zero {
        width: 50%;
      }
    }
  }
`

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <SectionTags>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
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
      <NumberSection>
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
      </NumberSection>
    </MyLayout>
  )
}

export default Money
