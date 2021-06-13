import { Row } from 'antd'
import React from 'react'
import './ManualTable.css'

const ManualTable = (props) => {
  const { columns, data } = props

  return (
    <table className='table'>
      <thead className='thead'>
        <tr className='tr'>
          <th className={['th red'].join(' ')}>[x]</th>
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
                {Object.entries(row).map(([key, value]) => {
                  return (
                    <td className='td' key={key}>
                      {value}/{key}
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
