import styled from "styled-components"
import {NavLink} from "react-router-dom"
import React from "react"
import Icon from "./Icon"

const NavWrapper = styled.nav`
  box-shadow: 0 0 2px rgba(0,0,0,.25);
  ul {
    display: flex;
    li {
      width: 33.333%;
      text-align: center;
      a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666;
        &.selected {
          color: red;
          .icon {
            fill: red
          }
        }
        .icon {
          height: 32px;
          width: 32px;
          fill: #666
        }
      }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
