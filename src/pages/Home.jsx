import React from 'react'
import { ProfileCard, News, Weather } from '../components/c.index';
import './css/Home.scss'

function Home() {
  return (
    <div className='home-container'>
        <main>
            <ProfileCard/>
            <News/>
            <Weather/>
        </main>
    </div>
  )
}

export default Home