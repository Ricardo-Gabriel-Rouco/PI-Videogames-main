import './App.css'
import Startpage from './components/Startpage/Startpage.jsx'
import Banner from './components/Banner/Banner.jsx'
import Home from './components/Home/Home.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form'
import Loader from './components/Loader/Loader.jsx'
import Music from './components/Music/Music.jsx'
import About from './components/About/About.jsx'
import { useState, useRef, useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate ,Outlet} from 'react-router-dom'

export const pageTitle = 'Henry Videogames'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  
  function start(){
    navigate('/home')
  }

  function goToAbout(){
    navigate('/about')
  }
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef()

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.1 // set volume to 10%
  }, [])

  function togglePlay(){
      const audio = audioRef.current
      if (isPlaying) {
        audio.pause()
      } else {
        audio.volume = 0.1
        audio.play()
      }
      setIsPlaying(!isPlaying)
  }


  
  if(location.pathname === '/'){
    return(
      <div className='App'>
        <Music isPlaying={isPlaying} audioRef={audioRef}/>
        <Routes>
          <Route path='/' element={<Startpage start={start} goToAbout={goToAbout} togglePlay={togglePlay} isPlaying={isPlaying}/>}></Route>
        </Routes>
      </div>
    )
  }

  return (
    <div className="App">
      <Music isPlaying={isPlaying} audioRef={audioRef}/>
      <Banner togglePlay={togglePlay} isPlaying={isPlaying}/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/videogames/:id' element={<Detail/>}></Route>
        <Route path='/videogames/create' element={<Form/>}/>
        <Route path='/loading' element={<Loader/>}></Route>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;

