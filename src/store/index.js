import { makeAutoObservable } from 'mobx'
import { fetched } from '../utils/fetched'
import { preparedData } from '../utils/helpers'
class Store {
  data = [] // raw data from server
  dataSource = [] // converted data
  columns = []

  constructor() {
    makeAutoObservable(this)
  }

  getColumnsMX = async () => {
    try {
      const response = await fetched('http://localhost:5000/columns', 'GET')
      const res = await response.json()
      console.log(res)
      this.columns = res.map((c) => (c.width ? c : { ...c, width: 150 }))
    } catch (error) {
      console.log(error)
    }
  }

  getDataMX = async () => {
    try {
      const response = await fetched('http://localhost:5000/data', 'GET')
      const res = await response.json()
      // console.log(res.value)
      this.data = res
      this.dataSource = preparedData(res.value, this.columns)
    } catch (error) {
      console.log(error)
    }
  }

  rowSelection = {
    selectedRows: [
      {
        id: 3,
        name: 'Shanie',
        description: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        dateCreated: '11/12/2020',
        incidentStatus: true,
        incidentRelevance: 'Ford',
        author: 'Shanie Speddin',
      },
    ],
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows)
    },
    onSelect: (row) => {
      if (this.rowSelection.selectedRows.findIndex((r) => r.id === row.id) === -1) {
        this.rowSelection.selectedRows = [...this.rowSelection.selectedRows, row]
      } else {
        this.rowSelection.selectedRows = this.rowSelection.selectedRows.filter((r) => r.id !== row.id)
      }
    },
    isChecked: (id) => {
      return this.rowSelection.selectedRows.findIndex((r) => r.id === id) !== -1
    },
  }
}

export const store = new Store()
