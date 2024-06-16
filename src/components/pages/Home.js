import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ScienceIcon from '@mui/icons-material/Science';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';
import './Home.css'

function Home() {
  const navigate = useNavigate('')

  const gmails = () =>{
    window.location.href = 'https://www.gmail.com/';
 }

//  const images = (e) => {
//   e.preventDefault();
//   navigate('/Home');
//  }
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>

        </div>
        <div className='home__headerRight'>
          <Link to='/gmails' onClick={gmails}>Gmails</Link>
          <Link to='/images'>Images</Link>
          <Link><ScienceIcon /></Link>
          <Link><AppsIcon /></Link>
          <Link><AccountCircleIcon /></Link>

        </div>
      </div>
      <div className='home__body '>
        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />
        <Search />

      </div>
      
    </div>
  )
}

export default Home;
