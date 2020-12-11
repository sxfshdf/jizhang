import Layout from "../components/Layout"
import React from "react"
import {useTags} from "useTags"
import styled from "styled-components"
import Icon from "../components/Icon"
import {Link} from "react-router-dom"
import {Button} from "components/Button"
import {CenterBox} from "components/CenterBox"

const TagList = styled.ul`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #ddd;
    > a {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > .icon {
       height: 20px;
       width: 20px;
       flex-shrink: 0;
    }
    }
  }
`

function Tags() {
  const {tags, addTag} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="one-line">{tag.id}: {tag.name}</span>
              <Icon name="arrow-right" />
            </Link>
          </li>
        )}
      </TagList>
      <CenterBox>
        <Button onClick={addTag}>新增标签</Button>
      </CenterBox>
    </Layout>
  )
}

export default Tags
