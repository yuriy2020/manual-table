import React from 'react'
import './App.css'
import Menu from './components/Menu'
import { TableGrid } from './components/TableGrid'

const App = () => {
  return (
    <div className='App'>
      <Menu />
      <TableGrid />
    </div>
  )
}

export default App
