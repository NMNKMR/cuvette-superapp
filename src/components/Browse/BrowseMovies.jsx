import React from 'react'
import useMoviesInfo from '../../Queries/useMoviesInfo'
import {Poster} from '../c.index';
import '../css/BrowseMovies.scss'

export default function BrowseMovies() {
    const [moviesData, error, loading] = useMoviesInfo();

  return (
    <div className='browse-movies'>
          {loading ? <div style={{color: "#FFF"}} className='loading'>Loading...</div> :
              !error ? moviesData.map(({ category, movies }) => (
                  <div key={category}>
                      <h3>{category}</h3>
                      <div className='movies-list'>
                          {movies?.map((movie) => (
                              <Poster posterPath={movie.poster_path} title={movie.title} key={movie.id} />
                          ))}
                      </div>
                  </div>
              ))
                  : <div style={{color: "#FFF"}} className='api-error'>Error Occured!</div>}
    </div>
  )
}
