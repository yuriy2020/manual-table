import React, { useEffect } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { store } from '../store'
import { observer } from 'mobx-react-lite'
import { mock_data } from '../store/mock_data'
import ManualTable from './ManualTable/ManualTable'
import { preparedData } from '../utils/helpers'

export const TableGrid = observer(() => {
  // ======== rowSelection objects indicates the need for row selection ==========

  const onRowClick = (zz, rowIndex) => {
    return {
      onClick: (e) => {
        console.log('clk', zz)
      },
      onDoubleClick: (e) => {
        console.log('dbl', zz)
      },
    }
  }

  useEffect(() => {
    store.getDataMX()
    store.getColumnsMX()
  }, [])
  useEffect(() => {
    console.log(store.rowSelection.selectedRows)
  }, [store.rowSelection.selectedRows])

  return (
    <div style={{ margin: 5 }}>
      {/* <Table
        onRow={onRowClick}
        rowSelection={{ ...rowSelection }} /// => checkboxes
        columns={store.columns}
        dataSource={store.data}
        size='small'
      /> */}
      <ManualTable columns={store.columns} data={store.data} select rowSelection={store.rowSelection} />
    </div>
  )
})
