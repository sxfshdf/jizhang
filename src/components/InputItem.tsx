import React from "react"
import styled from "styled-components"

const Label = styled.label`
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
`
type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const InputItem: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest} />
    </Label>
  )
}

export {InputItem}
