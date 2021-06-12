import React, { useEffect } from 'react'
import { Table} from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { store } from '../store'
import { observer } from 'mobx-react-lite'

export const TableGrid = observer(() => {
  

  useEffect(() => {
    store.getData()
  }, [])

  return (
    <>
      <Table columns={store.columns} dataSource={store.dataSource} size='small'/>
    </>
  )
})
