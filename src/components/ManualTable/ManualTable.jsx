import React, { useEffect } from 'react'
import './ManualTable.css'
import { Checkbox } from '../Checkbox/Checkbox'

const ManualTable = ({ columns, data, select, rowSelection }) => {
  const isDataCorrect = (d) => {
    // console.log(Array.isArray(d) && d.length > 0)
    return Array.isArray(d) && d.length > 0
  }
  if (select && isDataCorrect(columns)) {
    columns = [{ title: <Checkbox />, dataIndex: '#chbx', width: 30 }, ...columns]
  }

  const onResizeHandler = (event) => {
    const resizer = event.target
    const parent = resizer.closest('[data-type="resizable"]')
    const coords = parent.getBoundingClientRect()
    console.log(coords)
    let valueX
    document.onmousemove = (e) => {
      const deltaX = e.pageX - coords.right
      valueX = coords.width + deltaX
      parent.style.width = valueX + 'px'
    }

    document.onmouseup = () => {
      console.log({ id: parent.dataset.id, width: parent.style.width })
      document.onmousemove = null
      document.onmouseup = null
    }
  }

  const onSelect = (e) => {
    console.log(e.target)
  }

  useEffect(() => {
    console.log(columns[2])
  }, [])

  return (
    <table className='table'>
      <thead className='thead'>
        <tr className='tr header'>
          {columns.map((col, index) => {
            return (
              <th
                data-type='resizable'
                data-id={index}
                className={['th', 'resizable'].join(' ')}
                key={col?.dataIndex}
                style={{ width: col.width }}
              >
                {col?.title}
                <div data-type='resizer' className='resizer' onMouseDown={onResizeHandler}>
                  <div className='inresizer'></div>
                </div>
              </th>
            )
          })}
        </tr>
      </thead>

      <tbody className='tbody'>
        {isDataCorrect(data)
          ? data.map((row, idx) => {
              if (typeof row === 'object' && Object.keys(row)?.length) {
                return (
                  <tr className='tr' key={row?.id || idx} onClick={() => {}}>
                    {columns.map((col, index) => {
                      return (
                        <td data-type='resizable' data-id={index} className='td' key={col?.dataIndex || index}>
                          {col?.dataIndex === '#chbx' ? (
                            <Checkbox onChange={() => rowSelection.onSelect(row)} checked={rowSelection.isChecked(row.id)} />
                          ) : (
                            row[col?.dataIndex]
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              } else {
                return <tr key={row?.id || idx}>bad Data</tr>
              }
            })
          : null}
      </tbody>
    </table>
  )
}

export default ManualTable
