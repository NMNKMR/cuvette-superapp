import React from 'react'
import { ProfileCard, News, Weather, Notes, Timer } from '../components/c.index';
import './css/Home.scss'

function Home() {
  return (
    <div className='home-container'>
        <main>
            <ProfileCard/>
            <Notes/>
            <News/>
            <Weather/>
            <Timer/>
        </main>
    </div>
  )
}

export default Home