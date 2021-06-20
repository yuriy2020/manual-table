import React from 'react'

export const Checkbox = ({ onChange, checked }) => {
  return <input type='checkbox' onChange={onChange} checked={checked}></input>
}
