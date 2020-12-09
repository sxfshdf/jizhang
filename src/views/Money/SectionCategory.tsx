import styled from "styled-components"
import React from "react"

const Wrapper = styled.section`
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
const SectionCategory: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">收入</li>
        <li>支出</li>
      </ul>
    </Wrapper>
  )
}


export {SectionCategory}
