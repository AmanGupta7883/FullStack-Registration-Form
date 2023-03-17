import AddFrom from './Component/AddFrom'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AddForm' element={<AddFrom />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
