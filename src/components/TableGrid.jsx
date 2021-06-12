import React, { useEffect } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { store } from '../store'
import { observer } from 'mobx-react-lite'

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
        console.log('clk', zz.name)
      },
      onDoubleClick: (e) => {
        console.log('dbl', zz.key)
      },
    }
  }

  useEffect(() => {
    store.getData()
  }, [])

  return (
    <>
      <Table
        onRow={onRowClick}
        rowSelection={{ ...rowSelection }} /// => checkboxes
        columns={store.columns}
        dataSource={store.dataSource}
        size='small'
      />
    </>
  )
})
