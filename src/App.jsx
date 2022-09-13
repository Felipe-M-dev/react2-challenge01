import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
