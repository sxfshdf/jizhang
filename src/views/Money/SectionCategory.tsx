import styled from "styled-components"
import React, {useState} from "react"

const Wrapper = styled.section`
 > ul {
  display: flex;
  > li {
    width: 50%;
    text-align: center;
    font-size: 20px;
    padding: 20px 0;
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
const SectionCategory: React.FC = () => {
  const categoryMap = {'+': '收入',  '-': '支出'}
  // type X = typeof categoryMap
  // type Y = keyof X
  type Keys = keyof typeof categoryMap
  const [category, setCategory] = useState<string>('+')
  const [categoryList] = useState<Keys[]>(['+', '-'])
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              key={c}
              onClick={() => setCategory(c)}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}


export {SectionCategory}
