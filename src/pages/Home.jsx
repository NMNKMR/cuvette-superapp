import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { ProfileCard, News, Weather, Notes, Timer } from '../components/c.index';
import './css/Home.scss'
import useDate from '../hooks/useDate';

function Home() {
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const dateNTime = useDate(minutes);
  useEffect(() => {
    const dateTimer = setInterval(() => {
      setMinutes(new Date().getMinutes());
    }, 1000)

    return () => {
      clearInterval(dateTimer);
    }
  }, [])

  return (
    <div className='home-container'>
        <main>
            <ProfileCard/>
            <Notes/>
            <News dateNTime={dateNTime}/>
            <Weather dateNTime={dateNTime}/>
            <Timer/>
        </main>
        <Link to={'/browse'}>
          <button className='browse-button'>Browse</button>
        </Link>
    </div>
  )
}

export default Home