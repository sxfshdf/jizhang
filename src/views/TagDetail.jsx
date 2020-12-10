import React from "react"
import {useTags} from "useTags"
import {useParams} from 'react-router-dom'
import Layout from "components/Layout"
import Icon from "components/Icon"
import {Button} from "components/Button"
import styled from "styled-components"

const TopBar = styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  > span {
    font-size: 16px;
    padding: 14px 0;
  }
  > .icon {
    height: 20px;
    width: 20px;
  }
`
const TagDetail: React.FC = () => {
  const {findTag} = useTags()
  const {id} = useParams()
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <TopBar>
        <Icon name="arrow-left"/>
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名"/>
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  )
}

export {TagDetail}
