import styled from "styled-components"
import React from "react"
import {useTags} from "../../useTags"

const Wrapper = styled.section`
 background: #fff;
 padding: 12px 16px;
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 justify-content: flex-end;
 align-items: flex-start;
 > ul {
   margin: 0 -8px;
    > li {
      background: #ddd;
      display: inline-block;
      border-radius: 2px;
      padding: 4px 16px;
      margin: 0 8px;
      &.selected {
        background: #666;
        color: #fff;
      }
    }
 }
 button {
  background: none;
  border: none;
  border-bottom: 1px solid #888;
  padding: 2px 6px;
  color: #666;
  margin-top: 12px;
 }
`
type Props = {
  value: number[],
  onChange: (selected: number[]) => void
}
const SectionTags: React.FC<Props> = (props) => {
  // const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
  const {tags, setTags} = useTags()
  const selectedTagIds = props.value
  const onAddTag = () => {
    let tagName = window.prompt('请输入新标签的名称')
    if (tagName !== null) {
      tagName = tagName.replace(/(^\s*)|(\s*$)/g, '')
      if (tagName !== '') {
        setTags([...tags, {id: Math.random(), name: tagName}])
      }
    }
  }
  const onToggleTag = (tagId: number) => {
    let index = selectedTagIds.indexOf(tagId)
    if (index > -1) {
      // tag已经选择则移除
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      // tag不存在就添加
      props.onChange([...selectedTagIds, tagId])
    }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li onClick={() => onToggleTag(tag.id)}
              className={selectedTagIds.indexOf(tag.id) > -1 ? 'selected' : ''}
              key={tag.id}>{tag.name}</li>
        )}
      </ul>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export {SectionTags}
