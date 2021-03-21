import styled from "styled-components"
import React, {ChangeEventHandler} from "react"
import {InputItem} from "components/InputItem"
import Icon from 'components/Icon'
import Variables from '../../variables';

const Wrapper = styled.section`
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: #fff;
  font-size: 14px;
  border-top: 2px solid ${Variables.$border};
  border-bottom: 2px solid ${Variables.$border};
  > label {
    display: flex;
    align-items: center;
    color: ${Variables.$grey};
    > span {
      margin-right: 8px;
    }
    > input {
      flex: 1;
      height: 52px;
      border: none;
      background: none;
    }
  }
  > .icon {
    height: 20px;
    width: 20px;
    margin-right: 4px;
    fill: ${Variables.$grey}
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
      <Icon name='edit' />
      <InputItem label="" type="text" placeholder="请在此添加备注"
                 value={note}
                 onChange={onChange}/>
    </Wrapper>
  )
}

export {SectionNote}
