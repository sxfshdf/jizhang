import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";
import Variables from '../variables';

const NavWrapper = styled.nav`
  background: #fff;
  border-top: 1px solid #f5f5f5;

  ul {
    display: flex;

    li {
      width: 33.333%;
      text-align: center;

      a {
        display: flex;
        padding: 2px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: ${Variables.$lightGrey};

        &.selected {
          color: ${Variables.$blue};

          .icon {
            fill: ${Variables.$blue};
          }
        }

        .icon {
          height: 30px;
          width: 30px;
          fill: ${Variables.$lightGrey};
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
