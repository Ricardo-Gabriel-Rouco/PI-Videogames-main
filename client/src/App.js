import './App.css'
import Startpage from './components/Startpage/Startpage.jsx'
import Banner from './components/Banner/Banner.jsx'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form'
import { useState} from 'react'
import {Routes, Route, useLocation, useNavigate ,Outlet} from 'react-router-dom'

export const pageTitle = 'Henry Videogames'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  
  function start(){
    navigate('/home')
  }
  
  
  if(location.pathname === '/'){
    return(
      <div className='App'>
        <Routes>
          <Route path='/' element={<Startpage start={start}/>}></Route>
        </Routes>
      </div>
    )
  }

  return (
    <div className="App">
      <Banner/>
      {/* <Menu/> */}
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/videogames/:id' element={<Detail/>}></Route>
        <Route path='/videogames/create' element={<Form/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;

