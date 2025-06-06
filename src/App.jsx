import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Taklifnoma from './views/taklifnoma'

function App() {
  return (
    <Routes>
      <Route path='/:name' element={ <Taklifnoma /> }></Route>
    </Routes>
  )
}

export default App
