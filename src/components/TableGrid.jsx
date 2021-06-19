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
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows)
    },
  }

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
    store.getData()
    console.log(store.data)
  }, [])

  return (
    <div style={{margin:5}}>
      <Table
        onRow={onRowClick}
        rowSelection={{ ...rowSelection }} /// => checkboxes
        columns={store.columns}
        dataSource={preparedData(mock_data, store.columns)}
        size='small'
      />
      <ManualTable columns={store.columns} data={preparedData(mock_data,store.columns)} select rowSelection={rowSelection} />
    </div>
  )
})
