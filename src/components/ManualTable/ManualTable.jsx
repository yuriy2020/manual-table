// import { Row } from 'antd'
// import React, { useState, useEffect } from 'react'
// import './ManualTable.css'
// import { Checkbox } from '../Checkbox/Checkbox'

// const ManualTable = ({ columns, data, select, rowselection }) => {
//   if (select) {
//     columns = [{ title: '[x]', dataIndex: '#chbx' }, ...columns]
//   }

//   const onMouseDown = (event) => {
//     const resizer = event.target
//     const parent = resizer.closest('[data-type="resizable"]')
//     const coords = parent.getBoundingClientRect()
//     let valueX
//     document.onmousemove = (e) => {
//       const deltaX = e.pageX - coords.right
//       valueX = coords.width + deltaX
//       parent.style.width = valueX + 'px'
//     }

//     document.onmouseup = () => {
//       document.onmousemove = null
//       document.onmouseup = null
//     }
//   }

//   const onSelectRow = (r) => {
//     console.log(r)
//   }

//   return (
//     <table className='table'>
//       <thead className='thead'>
//         <tr className='tr header'>
//           {columns.map((col, index) => {
//             return (
//               <th data-type='resizable' data-id={index} className={['th', 'resizable'].join(' ')} key={col?.dataIndex}>
//                 {col?.title}
//                 <div data-type='resizer' className='resizer' onMouseDown={onMouseDown} />
//               </th>
//             )
//           })}
//         </tr>
//       </thead>

//       <tbody className='tbody'>
//         {data.map((row, idx) => {
//           if (typeof row === 'object' && Object.keys(row)?.length) {
//             return (
//               <tr className='tr' key={row?.id || idx} onClick={() => rowselection.onSelect()}>
//                 {columns.map((col, index) => {
//                   return (
//                     <td data-type='resizable' data-id={index} className='td' key={col?.dataIndex || index}>
//                       {col?.dataIndex === '#chbx' ? <Checkbox /> : row[col?.dataIndex]}
//                     </td>
//                   )
//                 })}
//               </tr>
//             )
//           } else {
//             return <tr key={row?.id || idx}>bad Data</tr>
//           }
//         })}
//       </tbody>
//     </table>
//   )
// }

// export default ManualTable
