import styled from "styled-components"
import React, {useState} from "react"
import {calculateOutput} from "./sectionNumber/calculateOutput"

const Wrapper = styled.section`
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
const SectionNumber: React.FC = () => {
  const [output, _setOutput] = useState<string>('0')
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16)
    } else if (output.length === 0) {
      output = '0'
    }
    _setOutput(output)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) return
    if (text === 'OK') {
      console.log('提交')
      return
    }
    if ('1234567890.'.split('').concat(['删除', '清空']).indexOf(text) > -1) {
      setOutput(calculateOutput(text, output))
    }
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div onClick={(e) => onClickButtonWrapper(e)} className="pad clearFix">
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
    </Wrapper>
  )
}

export {SectionNumber}
