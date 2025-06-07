import { Navigate, Route, Routes } from 'react-router-dom'
import Taklifnoma from './views/taklifnoma'

function App() {
  return (
      <>
      <div>
        Ishladi
      </div>
        <Routes>
          <Route path='/' element={ <Navigate to="user/Anvar"/> } />
          <Route path='/user/:name' element={ <Taklifnoma /> } />
          <Route path='*' element={ <div> Not Found Page </div> } />
        </Routes>
      </>
  )
}

export default App
