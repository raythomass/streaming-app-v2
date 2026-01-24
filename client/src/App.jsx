import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NowPlaying from './pages/NowPlaying'
import Shows from './pages/Shows'
import Movies from './pages/Movies'
import NowPlayingMovie from './pages/NowPlayingMovie'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
        <div className='routes'>
          <Routes>
            <Route
              path= '/'
              element= {<NowPlaying/>}
            />
            <Route
              path='/shows'
              element={<Shows/>}
            />
            <Route
              path='/movies'
              element={<Movies/>}
            />
            <Route
              path='/movies/:id'
              element={<NowPlayingMovie/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
