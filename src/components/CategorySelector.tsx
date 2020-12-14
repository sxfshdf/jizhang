import styled from "styled-components"
import React, {useState} from "react"

const Wrapper = styled.section`
 > ul {
  display: flex;
  > li {
    width: 50%;
    text-align: center;
    font-size: 20px;
    padding: 16px 0;
    position: relative;
    &.selected:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: #333;
      }
    }
 }
`
type Props = {
  value: '-' | '+',
  onChange: (category: '+' | '-') => void
}
const CategorySelector: React.FC<Props> = (props) => {
  const categoryMap = {'+': '收入',  '-': '支出'}
  // type X = typeof categoryMap
  // type Y = keyof X
  type Keys = keyof typeof categoryMap
  // const [category, setCategory] = useState<string>('+')
  const category = props.value
  const [categoryList] = useState<Keys[]>(['+', '-'])
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              key={c}
              onClick={() => props.onChange(c)}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}


export {CategorySelector}
