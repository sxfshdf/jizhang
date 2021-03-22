import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'components/Icon';
import {createId} from './create'

interface Message {
  id?: number,
  type: 'error' | 'check',
  content: string,
  delay?: number
}

let messageArr: Message[] = [];
const maxLength = 3
const createMessage = (message: Message) => {
  if (!(document.getElementById('messageBoxWrapper'))) {
    createMessageBox()
  }
  message.id = createId()
  if (messageArr.length >= maxLength) {
    messageArr.shift()
  }
  messageArr.push(message)
  const messageBox = document.getElementById('messageBoxWrapper');
  setTimer(messageBox!, message)
  render(messageBox!, message)
};

function createMessageBox() {
  const div = document.createElement('div');
  div.id = 'messageBoxWrapper';
  div.className = 'message-box-wrapper';
  document.body.appendChild(div);
}

function className(type: string) {
  return type === 'error' ? 'message-item flex-center error' : 'message-item flex-center check'
}

function render(el: HTMLElement, message: Message) {
  ReactDOM.render(
    <>
      {messageArr.map(message =>
        <div className={className(message.type)} key={message.id}>
          <Icon name={message.type === 'error' ? 'error' : 'check'} />
          <span>{message.content}</span>
        </div>)}
    </>,
    el
  );
}

function setTimer(el: HTMLElement, message: Message) {
  setTimeout(() => {
    let index = messageArr.findIndex(msg => msg.id === message.id)
    if (index > -1) {
      messageArr.splice(index, 1)
    }
    render(el, message)
  }, message.delay ? message.delay * 1000 : 2000)
}

export {createMessage};
