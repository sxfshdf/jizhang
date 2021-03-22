import React, {ChangeEvent} from "react";
import Variables from '../variables';
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  flex: 1;

  > span {
    margin-right: 8px;
  }
  .input-wrapper {
    flex: 1;
    position: relative;
    > input {
      width: 100%;
      height: 44px;
      border: none;
      background: none;
    }
    > .message {
      bottom: -18px;
      position: absolute;
      color: ${Variables.$red};
    }
  }
`;
type Props = {
  label?: string,
  value?: string,
  showMessage?: boolean,
  message?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const InputItem: React.FC<Props> = (props) => {
  const {label, children, value, onChange, showMessage, message, ...rest} = props;
  return (
    <Label>
      {label === undefined ? null : <span>{label}</span>}
      <div className="input-wrapper">
        <input {...rest} value={value} onChange={onChange}/>
        {/*{showMessage === true ? <div className='message'>{message}</div> : null}*/}
      </div>
    </Label>
  );
};

export {InputItem};
