import {useEffect, useState} from "react"
import {createId} from "./lib/create"
import {useUpdate} from "./hooks/useUpdate"

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([])
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ]
    }
    setTags(localTags)
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])
  const findTag =(id: number) => tags.filter(tag => tag.id === id)[0]
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => {
      return tag.id === id ? {id, name} : tag
    }))
  }
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }
  const addTag = () => {
    let tagName = window.prompt('请输入新标签的名称')
    if (tagName !== null) {
      tagName = tagName.replace(/(^\s*)|(\s*$)/g, '')
      if (tagName !== '') {
        setTags([...tags, {id: createId(), name: tagName}])
      }
    }
  }
  return {tags, setTags, findTag, updateTag, deleteTag, addTag}
}

export {useTags}
