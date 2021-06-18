import { Row } from 'antd'
import React, { useState, useEffect } from 'react'
import './ManualTable.css'

const ManualTable = ({ columns, data, select }) => {
  if (select) {
    columns = [{ title: '[x]', dataIndex: '#chbx' }, ...columns]
  }
  const [resizedElement, setResizedElement] = useState({})

  const onMouseDown = (event) => {
    const resizer = event.target
    const parent = resizer.closest('[data-type="resizable"]')
    const coords = parent.getBoundingClientRect()
    let valueX
    let valueY
    // setResizedElement(parent.dataset.id)
    document.onmousemove = (e) => {
      const deltaX = e.pageX - coords.right
      valueX = coords.width + deltaX
      parent.style.width = valueX + 'px'
      console.log('>>', e.pageX)
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null
    }
  }

  useEffect(() => {
    console.log(resizedElement)
  }, [resizedElement])

  return (
    <table className='table'>
      <thead className='thead'>
        <tr className='tr header'>
          {/* <th className={['th'].join(' ')}>[x]</th> */}
          {columns.map((col, index) => {
            return (
              <th data-type='resizable' data-id={index} className={['th', 'resizable'].join(' ')} key={col?.dataIndex}>
                {col?.title}
                <div
                  data-type='resizer'
                  className='resizer'
                  onMouseDown={onMouseDown}
                  // onMouseMove={onMouseMove}
                  // onMouseUp={onMouseUp}
                  // onDrag={onDrag}
                />
              </th>
            )
          })}
        </tr>
      </thead>

      <tbody className='tbody'>
        {data.map((row, idx) => {
          if (typeof row === 'object' && Object.keys(row)?.length) {
            return (
              <tr className='tr' key={row?.id || idx}>
                {columns.map((col, index) => {
                  return (
                    <td data-type='resizable' data-id={index} className='td' key={col?.dataIndex || index}>
                      {col?.dataIndex === '#chbx' ? '[v]' : row[col?.dataIndex]}
                    </td>
                  )
                })}
              </tr>
            )
          } else {
            return <tr key={row?.id || idx}>bad Data</tr>
          }
        })}
      </tbody>
    </table>
  )
}

export default ManualTable
