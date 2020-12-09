import styled from "styled-components"
import React, {useRef, useState} from "react"

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

const SectionNote: React.FC = () => {
  const [note, setNote] = useState<string>('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="请在此添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}

export {SectionNote}
