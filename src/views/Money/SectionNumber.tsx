import styled from "styled-components"

const SectionNumber = styled.section`
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

export {SectionNumber}
