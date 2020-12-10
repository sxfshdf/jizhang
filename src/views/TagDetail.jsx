import React from "react"
import {useTags} from "useTags"
import {useParams} from 'react-router-dom'
import Layout from "components/Layout"
import Icon from "components/Icon"
import {Button} from "components/Button"
import styled from "styled-components"
import {InputItem} from "components/InputItem"
import {CenterBox} from "components/CenterBox"

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
const InputWrapper = styled.section`
  background: #fff;
  padding: 0 16px;
  margin-top: 16px;
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
      <InputWrapper>
        <InputItem label='标签名' placeholder="输入标签名" value={tag.name}/>
      </InputWrapper>
      <CenterBox>
        <Button>删除标签</Button>
      </CenterBox>
    </Layout>
  )
}

export {TagDetail}
