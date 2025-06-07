import { Route, Routes } from 'react-router-dom'
import Taklifnoma from './views/taklifnoma'

function App() {
  return (
      <Routes>
        <Route path='#/kim' element={<div> Ishladi </div>}/>
        <Route path='#/:name' element={ <Taklifnoma /> }></Route>
      </Routes>
  )
}

export default App
