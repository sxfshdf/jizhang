import styled from "styled-components";
import React, {useState} from "react";
import Variables from '../variables';
import Icon from './Icon'

const Wrapper = styled.section`
  > ul {
    display: flex;
    border-bottom: 2px solid #f5f5f5;
    > li {
      width: 50%;
      text-align: center;
      font-size: 16px;
      padding: 14px 0;
      position: relative;
      color: ${Variables.$lightGrey};
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &.selected:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        height: 2px;
        border-radius: 2px;
        width: 60%;
        transform: translateX(-50%);
        background: ${Variables.$blue};
      }
      &.selected {
        border-radius: 40px;
        color: ${Variables.$blue};
        .icon {
          fill: ${Variables.$blue};
        }
      }
      .icon {
        fill: ${Variables.$lightGrey};
        height: 18px;
        width: 18px;
        margin-right: 4px;
      }
    }
  }
`;
type Props = {
  value: '-' | '+',
  onChange: (category: '+' | '-') => void
}
const CategorySelector: React.FC<Props> = (props) => {
  const categoryMap = {'+': '收入', '-': '支出'};
  // type X = typeof categoryMap
  // type Y = keyof X
  type Keys = keyof typeof categoryMap
  // const [category, setCategory] = useState<string>('+')
  const category = props.value;
  const [categoryList] = useState<Keys[]>(['+', '-']);
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              key={c}
              onClick={() => props.onChange(c)}
          ><Icon name={c === '+' ? 'income' : 'outcome'} /><span>{categoryMap[c]}</span></li>
        )}
      </ul>
    </Wrapper>
  );
};


export {CategorySelector};
