import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Trending from './pages/Trending'
import Shows from './pages/Shows'
import Movies from './pages/Movies'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
        <div className='routes'>
          <Routes>
            <Route
              path= '/'
              element= {<Trending/>}
            />
            <Route
              path='/shows'
              element={<Shows/>}
            />
            <Route
              path='/movies'
              element={<Movies/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
