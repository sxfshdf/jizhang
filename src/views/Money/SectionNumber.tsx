import styled from "styled-components";
import React from "react";
import {calculateOutput} from "./sectionNumber/calculateOutput";
import Variables from '../../variables';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: #fff;
    color: ${Variables.$blue};
    font-size: 48px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
  }

  > .pad {
    > .button-wrapper {
      position: relative;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      background: #fff;

      &.ok {
        float: right;
        height: 128px;
      }

      &.zero {
        width: 50%;
      }

      > button {
        font-size: 18px;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 4px;
        background: #fff;
        color: ${Variables.$grey};
        box-shadow: 0 1px 2px rgba(0, 0, 0, .1), 1px 4px 6px rgba(0, 0, 0, .1);

        &.ok {
          background: ${Variables.$blue};
          color: #fff;
          box-shadow: 0 1px 2px rgba(8, 67, 125, .8), 2px 4px 6px rgba(8, 67, 125, .2);
        }

        &.del, &.clear {
          color: ${Variables.$red};
        }
        &.dot {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
`;
type Props = {
  value: string,
  onChange: (amount: string) => void,
  onOk?: () => void
}
const SectionNumber: React.FC<Props> = (props) => {
  const output = props.value.toString();
  const setOutput = (output: string) => {
    let value;
    if (output.length > 16) {
      value = output.slice(0, 16);
    } else if (output.length === 0) {
      value = '0';
    } else {
      value = output;
    }
    props.onChange(value);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if (text === 'OK') {
      if (props.onOk) {
        props.onOk();
      }
      return;
    }
    if ('1234567890.'.split('').concat(['Delete', 'Clear']).indexOf(text) > -1) {
      setOutput(calculateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div onClick={(e) => onClickButtonWrapper(e)} className="pad clearFix">
        <div className='button-wrapper'>
          <button>1</button>
        </div>
        <div className='button-wrapper'>
          <button>2</button>
        </div>
        <div className="button-wrapper">
          <button>3</button>
        </div>
        <div className="button-wrapper">
          <button className='del'>Delete</button>
        </div>
        <div className="button-wrapper">
          <button>4</button>
        </div>
        <div className="button-wrapper">
          <button>5</button>
        </div>
        <div className="button-wrapper">
          <button>6</button>
        </div>
        <div className="button-wrapper">
          <button className='clear'>Clear</button>
        </div>
        <div className="button-wrapper">
          <button>7</button>
        </div>
        <div className="button-wrapper">
          <button>8</button>
        </div>
        <div className="button-wrapper">
          <button>9</button>
        </div>
        <div className="button-wrapper ok">
          <button className='ok'>OK</button>
        </div>
        <div className="button-wrapper zero">
          <button>0</button>
        </div>
        <div className="button-wrapper">
          <button className='dot'>.</button>
        </div>
      </div>
    </Wrapper>
  );
};

export {SectionNumber};
