import React from 'react'
import './css/Browse.scss'
import { BrowseMovies } from '../components/c.index'
import { Link } from 'react-router-dom'

function Browse() {
    
  return (
    <div className='browse'>
        <div className="browse-header">
            <div>
                <h3>Super app</h3>
                <div><Link to={'/'}><img src="../../src/assets/images/small-avatar.png" alt="avatar" /></Link></div>
            </div>
            <h3>Entertainment according to your choice</h3>
        </div>
        <div className="browse-body">
            <BrowseMovies/>
        </div>
    </div>
  )
}

export default Browse