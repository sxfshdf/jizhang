import {useState} from "react"
import {createId} from "./lib/create"

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
]
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
  const findTag =(id: number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id: number) => tags.findIndex(tag => tag.id === id)
  const updateTag = (id: number, name: string) => {
    let index = findTagIndex(id)
    let newTags = JSON.parse(JSON.stringify(tags))
    if (index > -1) {
      newTags.splice(index, 1, {id, name})
    }
    setTags(newTags)
  }
  const deleteTag = (id: number) => {
    let index = findTagIndex(id)
    let newTags = JSON.parse(JSON.stringify(tags))
    if (index > -1) {
      newTags.splice(index, 1)
    }
    setTags(newTags)
  }
  return {tags, setTags, findTag, updateTag, deleteTag}
}

export {useTags}
