import styled from 'styled-components';
import React, {useState} from "react";

const MessageWrapper = styled.div`
  position: fixed;
  z-index: 2000;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  background: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,.1);
`

interface Props {

}
interface Message {
  type: string,
  content: string
}
const MessageBox: React.FC<Props> = props => {
  const messageArr = useState<Message[]>([])
  return (
    <MessageWrapper>
      {messageArr.length > 0 ? messageArr.map(message =>
        <div>xxx</div>
      ) : null}
    </MessageWrapper>
  )
}

export {MessageBox}
