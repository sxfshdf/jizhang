import Layout from "../components/Layout"
import React from "react"
import styled from "styled-components"

const SectionTags = styled.section`
 background: #fff;
 padding: 12px 16px;
 ul {
   margin: 0 -8px;
    li {
      background: #ddd;
      display: inline-block;
      border-radius: 2px;
      padding: 4px 16px;
      margin: 0 8px;
      font-size: 14px;
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
 
`

const SectionCategory = styled.section`
 
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
        <label>备注</label>
        <input type="text"/>
      </SectionNotes>
      <SectionCategory>
        <ul>
          <li>收入</li>
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
