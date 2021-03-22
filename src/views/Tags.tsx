import Layout from "../components/Layout";
import React, {ChangeEvent, useCallback, useState} from "react";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Button} from "components/Button";
import {CenterBox} from "components/CenterBox";
import {InputItem} from 'components/InputItem'
import Variables from '../variables';
import {useUpdate} from '../hooks/useUpdate';
import {X} from '../components/X';
import {createMessage} from '../lib/createMessage';

const TagList = styled.ul`
  font-size: 16px;
  background: #fff;
  overflow: auto;
  height: calc(100% - 64px);
  > li {
    border-bottom: 2px solid #f5f5f5;
    display: flex;
    align-items: center;

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
`;

const LayoutWrapper = styled(Layout)`
  background: #fff;
  .center-box {
    margin: 0;
    padding: 12px 0;
  }
  .button {
    background: ${Variables.$blue};
    color: #fff;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    padding: 0;
    box-shadow: 0 2px 4px rgba(8,100,191,.6);
    .icon {
      height: 16px;
      width: 16px;
      fill: #fff
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  &.content {
    flex: 1;
    padding: 6px 10px;
    color: ${Variables.$grey};
    span {
      display: inline-block;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
    }
  }
  .input-wrapper {
    input {
      border: 1px solid #f5f5f5;
      padding: 0 10px;
      border-radius: 4px;
      height: 36px;
    }
  }
`
const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  .icon {
    height: 18px;
    width: 18px;
    fill: ${Variables.$blue}
  }
  .icon.delete {
    fill: ${Variables.$red}
  }
`
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

function Tags() {
  const {tags, addTag, updateTag, deleteTag} = useTags();
  const [selectedId, setSelectedId] = useState<number|null>(null)
  const [isEdit, setIsEdit] = useState<Boolean>(true)
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  useUpdate(() => {
    if (selectedId !== null) {
      const input = document.getElementById(selectedId.toString()) as HTMLInputElement
      input && input.focus()
    }
  }, [selectedId])
  const handleEdit = (tag:{id: number, name: string}) => {
    let {id} = tag
    setSelectedId(id)
    setIsEdit(true)
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>, tag: {id: number, name: string}) => {
    updateTag(tag.id, e.target.value)
  }
  const handleDelete = (id:number) => {
    deleteTag(id)
    setSelectedId(null)
    setIsEdit(false)
  }
  const initModal = () => {
    setShowModal(false);
    setInputValue('');
  }
  const findDuplicateTag = (tagName: string) => {
    return tags.findIndex(tag => tag.name === tagName) > -1;
  };
  const handleInputChange = useCallback((e) => {
    const value = e.target.value.replace(/(^\s)|(\s*)/g, '');
    setInputValue(value);
  }, []);
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
  return (
    <LayoutWrapper title='标签页'>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            {/*<Link to={'/tags/' + tag.id}>*/}
            <Wrapper className='content'>
              {isEdit && selectedId === tag.id
                ? <InputItem value={tag.name} id={tag.id.toString()}
                             onBlur={() => setIsEdit(false)}
                             onChange={(e) => handleChange(e, tag)}/>
                : <span className="one-line">{tag.name}</span>}
            </Wrapper>
            <Wrapper>
              <IconWrapper className='flex-center' onClick={() => {
                handleEdit(tag)}
              }>
                <Icon name="edit"/>
              </IconWrapper>
              <IconWrapper className='flex-center' onClick={() => {
                handleDelete(tag.id);
              }}>
                <Icon name="delete" className='delete'/>
              </IconWrapper>
            </Wrapper>
            {/*</Link>*/}
          </li>
        )}
      </TagList>
      <CenterBox className='center-box'>
        <Button onClick={() => setShowModal(true)} className='button flex-center'>
          <Icon name='add' />
        </Button>
      </CenterBox>
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
    </LayoutWrapper>
  );
}

export default Tags;
