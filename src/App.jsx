import { Navigate, Route, Routes } from 'react-router-dom'
import Taklifnoma from './views/taklifnoma'

function App() {
  return (
      <>
      <div>
        Ishladi
      </div>
        <Routes>
          <Route path='/not' element={ <div> Not Found Page </div> } />
          <Route path='/notfount' element={ <div> Not Found Page 1 </div> } />
        </Routes>
      </>
  )
}

export default App
