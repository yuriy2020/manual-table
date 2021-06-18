import { makeAutoObservable } from 'mobx'
import { fetched } from '../utils/fetched'

class Store {
  count = 3
  data = []
  dataSource = []
  columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Наименование', dataIndex: 'name' },
    { title: 'Описание', dataIndex: 'description' },
    { title: 'Дата Создания', dataIndex: 'dateCreated' },
    { title: 'Статус', dataIndex: 'incidentStatus' },
    { title: 'Важность', dataIndex: 'incidentRelevance' },
    { title: 'Автор', dataIndex: 'author' },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  preparedData = (rawData) => {
    let arr = []
    rawData.forEach((elem) => {
      let obj = { key: elem.id }
      store.columns.forEach((col) => {
        let value
        if (typeof elem[col.dataIndex] === 'string' || typeof elem[col.dataIndex] === 'number') {
          value = elem[col.dataIndex]
        } else if (typeof elem[col.dataIndex] === 'object') {
          value = elem[col.dataIndex]?.name || elem[col.dataIndex]?.id || 'n/d'
        }
        obj = { ...obj, [col.dataIndex]: value }
      })
      arr.push(obj)
    })
    // console.log(arr)
    return arr
  }

  getData = async () => {
    try {
      const response = await fetched(
        'http://localhost:36058/api/newinc/get?take=11&skip=0&sortDir=desc&sortBy=dateCreated&passportType=Postmodern',
        'GET'
      )
      const res = await response.json()
      console.log(res.value)
      this.data = res.value
      this.dataSource = this.preparedData(res.value)
    } catch (error) {
      console.log(error)
    }
  }
}

export const store = new Store()
