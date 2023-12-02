import React from 'react'
import '../css/Poster.scss'

export default function Poster({
    posterPath="",
    title="Poster Not Available"
}) {

    const poster = `https://image.tmdb.org/t/p/w500${posterPath}`
    
  return (
    <div className='movie-poster' title={title}>
       {posterPath ? <img src={poster} alt="movie-poster" /> : title}
    </div>
  )
}
