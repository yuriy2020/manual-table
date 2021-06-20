/// Pure  Functions

export const preparedData = (rawData, columns) => {
  let arr = []
  if (rawData) {
    rawData.forEach((elem) => {
      let obj = { key: elem.id }
      columns.forEach((col) => {
        let value
        if (typeof elem[col.dataIndex] === 'string' || typeof elem[col.dataIndex] === 'number') {
          value = elem[col.dataIndex]
        } else if (typeof elem[col.dataIndex] === 'object') {
          value = elem[col.dataIndex]?.name || elem[col.dataIndex]?.id || 'n/d'
        }
        obj = { ...obj, [col.dataIndex]: value }
      })
      arr.push(obj)
    })
  }
  // console.log(arr)
  return arr
}
