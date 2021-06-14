import { Row } from 'antd'
import React from 'react'
import './ManualTable.css'

const ManualTable = ({ columns, data, select }) => {
  if (select) {
    columns = [{ title: '[x]', dataIndex: '#chbx' }, ...columns]
  }
  console.log(columns)

  return (
    <table className='table'>
      <thead className='thead'>
        <tr className='tr'>
          {/* <th className={['th'].join(' ')}>[x]</th> */}
          {columns.map((col) => {
            return <th className='th'>{col.title}</th>
          })}
        </tr>
      </thead>

      <tbody className='tbody'>
        {data.map((row, idx) => {
          if (typeof row === 'object' && Object.keys(row).length) {
            return (
              <tr className='tr' key={row.id || idx}>
                {columns.map((col, idx) => {
                  return (
                    <td className='td' key={idx}>
                      {col.dataIndex === '#chbx' ? '[v]' : row[col.dataIndex]}
                    </td>
                  )
                })}
              </tr>
            )
          } else {
            return <tr>bad Data</tr>
          }
        })}
      </tbody>
    </table>
  )
}

export default ManualTable
