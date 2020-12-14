import {useEffect, useState} from "react"
import {useUpdate} from "./useUpdate"

type NewRecordItem = {
  tagIds: number[],
  category: '+' | '-',
  note: string,
  amount: number,
}

export type RecordItem = NewRecordItem & {
  createAt: string
}
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])

  useEffect(() => {
    const localRecords = JSON.parse(window.localStorage.getItem('records') || '[]')
    setRecords(localRecords)
  }, [])

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, records)

  const addRecords = (record: NewRecordItem) => {
    if (record.tagIds.length === 0) {
      window.alert('请选择标签')
      return false
    }
    if (record.amount === 0) {
      window.alert('请输入正确的金额')
      return false
    }
    const newRecord = {...record, createAt: new Date().toISOString()}
    setRecords([...records, newRecord])
    return true
  }


  return {records, addRecords}
}

export {useRecords}
