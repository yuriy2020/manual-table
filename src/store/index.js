import { makeAutoObservable } from 'mobx'
import { fetched } from '../utils/fetched'
import { preparedData}  from '../utils/helpers'
class Store {
  count = 3
  data = []  // raw data from server
  dataSource = []  // converted data
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

  getData = async () => {
    try {
      const response = await fetched(
        'http://localhost:36058/api/newinc/get?take=11&skip=0&sortDir=desc&sortBy=dateCreated&passportType=Postmodern',
        'GET'
      )
      const res = await response.json()
      // console.log(res.value)
      this.data = res.value
      this.dataSource = preparedData(res.value, this.columns)
    } catch (error) {
      console.log(error)
    }
  }
}

export const store = new Store()
