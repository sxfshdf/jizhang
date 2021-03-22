import styled from "styled-components";
import React, {useCallback, useState} from "react";
import Icon from '../../components/Icon';
import {useTags} from "../../hooks/useTags";
import Variables from '../../variables';
import {InputItem} from '../../components/InputItem';
import {X} from '../../components/X';
import {createMessage} from 'lib/createMessage';

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
      box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
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

  button.add {
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
const InputItemWrapper = styled.div`
  .input-wrapper {
    input {
      padding: 0 10px;
      border: 1px solid ${Variables.$lightGrey};

      &:focus {
        border: 1px solid ${Variables.$blue};
      }

      &.error {
        border: 1px solid ${Variables.$red};
      }
    }
  }
`;
type Props = {
  value: number[],
  onChange: (selected: number[]) => void
}
const SectionTags: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
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
  const initModal = () => {
    setShowModal(false);
    setInputValue('');
  }
  const findDuplicateTag = (tagName: string) => {
    return tags.findIndex(tag => tag.name === tagName) > -1;
  };
  const onConfirm = useCallback(() => {
    if (inputValue === '' || !inputValue) return;
    if (findDuplicateTag(inputValue)) {
      createMessage({type: 'error', content: '标签名已存在'})
      return;
    }
    addTag(inputValue);
    createMessage({type: 'check', content: '添加成功'})
    initModal()
  }, [inputValue]);
  const onCancel = useCallback(() => {
    initModal()
  }, []);
  const handleInputChange = useCallback((e) => {
    const value = e.target.value.replace(/(^\s)|(\s*)/g, '');
    setInputValue(value);
  }, []);
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li onClick={() => onToggleTag(tag.id)}
              className={selectedTagIds.indexOf(tag.id) > -1 ? 'selected' : ''}
              key={tag.id}>{tag.name}</li>
        )}
      </ul>
      <button className='add' onClick={() => setShowModal(true)}><Icon name='add'/>新增标签</button>
      <X visible={showModal}
         onClose={onCancel}
         onConfirm={onConfirm}
         height='180px'
         title='添加标签'>
        <InputItemWrapper>
          <InputItem
            label='标签名称'
            value={inputValue}
            onChange={handleInputChange}/>
        </InputItemWrapper>
      </X>
    </Wrapper>
  );
};

export {SectionTags};
