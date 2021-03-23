import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';
import Variables from '../variables';

const EmptyWrapper = styled.div`
  .empty {
    flex-direction: column;
    .icon {
      height: 72px;
      width: 72px;
      fill: ${Variables.$lightGrey}
    }
    .info {
      color: ${Variables.$lightGrey};
      margin-top: 10px;
    }
  }
`;

interface Props {
  message: string,
  icon: string,
}
const EmptyInfo: React.FC<Props> = props => {
  const {message, icon, ...rest} = props
  return (
    <EmptyWrapper {...rest}>
      <div className="empty flex-center">
        <Icon name={props.icon} />
        <div className="info">{props.message}</div>
      </div>
      {props.children}
    </EmptyWrapper>
  )
}

export {EmptyInfo}
