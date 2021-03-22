import {useEffect, useState} from "react";
import {createId} from "../lib/create";
import {useUpdate} from "./useUpdate";
import {createMessage} from 'lib/createMessage';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => {
      return tag.id === id ? {id, name} : tag;
    }));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    createMessage({type: 'check', content: '删除成功'})
  };
  const addTag = (tagName: string) => {
    tagName = tagName.replace(/(^\s*)|(\s*$)/g, '');
    const index = tags.findIndex(tag => tag.name === tagName);
    if (index > -1) return;
    setTags([...tags, {id: createId(), name: tagName}]);
  };
  const getTagNames = (ids: number[]) => {
    let names: string[] = [];
    if (ids.length === 0) return '';
    ids.forEach(id => {
      const tag = tags.filter(tag => tag.id === id)[0];
      if (tag === undefined) return;
      names.push(tag.name);
    });
    return names.join(' , ');
  };
  return {tags, setTags, findTag, updateTag, deleteTag, addTag, getTagNames};
};

export {useTags};
