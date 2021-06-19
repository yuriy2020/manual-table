import { makeAutoObservable } from 'mobx'
import { fetched } from '../utils/fetched'
import { preparedData } from '../utils/helpers'
class Store {
  count = 3
  data = [] // raw data from server
  dataSource = [] // converted data
  columns = []

  constructor() {
    makeAutoObservable(this)
  }

  getColumns = async () => {
    try {
      const response = await fetched('http://localhost:5000/columns', 'GET')
      const res = await response.json()
      console.log(res)
      this.columns = res
    } catch (error) {
      console.log(error)
    }
  }

  getData = async () => {
    try {
      const response = await fetched(
        'http://localhost:5000/data',
        // 'http://localhost:36058/api/newinc/get?take=11&skip=0&sortDir=desc&sortBy=dateCreated&passportType=Postmodern',
        'GET'
      )
      const res = await response.json()
      // console.log(res.value)
      this.data = res
      this.dataSource = preparedData(res.value, this.columns)
    } catch (error) {
      console.log(error)
    }
  }
}

export const store = new Store()
