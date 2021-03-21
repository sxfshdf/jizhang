import styled from "styled-components";
import React from "react";
import Icon from  '../../components/Icon'
import {useTags} from "../../hooks/useTags";
import Variables from '../../variables';

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;

  > ul {
    margin: 0 -8px;
    overflow: auto;

    > li {
      background: #fff;
      color: ${Variables.$lightGrey};
      box-shadow: 0 1px 4px rgba(0,0,0,.1);
      display: inline-block;
      border-radius: 16px;
      padding: 6px 16px;
      margin: 6px 8px;

      &.selected {
        background: ${Variables.$blue};
        color: #fff;
      }
    }
  }

  button {
    background: #fff;
    border: none;
    border-radius: 16px;
    padding: 4px 10px;
    color: ${Variables.$blue};
    margin: 10px auto 0;
    .icon {
      fill: ${Variables.$blue};
      height: 14px;
      width: 14px;
      margin-right: 2px;
    }
  }
`;
type Props = {
  value: number[],
  onChange: (selected: number[]) => void
}
const SectionTags: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    let index = selectedTagIds.indexOf(tagId);
    if (index > -1) {
      // tag已经选择则移除
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      // tag不存在就添加
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li onClick={() => onToggleTag(tag.id)}
              className={selectedTagIds.indexOf(tag.id) > -1 ? 'selected' : ''}
              key={tag.id}>{tag.name}</li>
        )}
      </ul>
      <button onClick={addTag}><Icon name='add' />新增标签</button>
    </Wrapper>
  );
};

export {SectionTags};
