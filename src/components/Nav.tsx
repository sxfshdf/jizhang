import styled from "styled-components"
import {Link} from "react-router-dom"
import React from "react"
import Icon from "./Icon"

const NavWrapper = styled.nav`
  box-shadow: 0 0 2px rgba(0,0,0,.25);
  ul {
    display: flex;
    li {
      width: 33.333%;
      text-align: center;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      .icon {
        height: 32px;
        width: 32px
      }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
