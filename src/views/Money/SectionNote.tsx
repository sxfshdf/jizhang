import styled from "styled-components"
import React, {ChangeEventHandler} from "react"
import {InputItem} from "components/InputItem"

const Wrapper = styled.section`
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
type Props = {
  value: string,
  onChange: (note: string) => void
}

const SectionNote: React.FC<Props> = (props) => {
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <Wrapper>
      <InputItem label="备注" type="text" placeholder="请在此添加备注"
                 value={note}
                 onChange={onChange}/>
    </Wrapper>
  )
}

export {SectionNote}
