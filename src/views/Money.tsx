import Layout from "../components/Layout"
import React from "react"
import styled from "styled-components"

const SectionTags = styled.section`
 background: #fff;
 padding: 12px 16px;
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
 }
`

const NumberSection = styled.section`
 
`
function Money() {
  return (
    <Layout>
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
          <input type="text" placeholder="请在此添加备注" />
        </label>
      </SectionNotes>
      <SectionCategory>
        <ul>
          <li className="selected">收入</li>
          <li>支出</li>
        </ul>
      </SectionCategory>
      <NumberSection>
        <div>100</div>
        <div>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberSection>
    </Layout>
  )
}

export default Money
