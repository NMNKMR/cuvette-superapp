import React, { useEffect, useState } from 'react'
import {Poster} from '../c.index';
import useMoviesInfo from '../../hooks/useMoviesInfo';
import { genreId } from '../../utils/data';
import '../css/BrowseMovies.scss'

export default function BrowseMovies() {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(()=> {
        const categories = JSON.parse(localStorage.getItem('categories'));
        Promise.all(categories.map(async (cat)=> {
            const response = await useMoviesInfo(genreId[cat]);
            const random = Math.floor(Math.random() * (response.data.results.length-3))
            const moviesByCategory = response.data.results.slice(random, random+4);
            return {category: cat, movies: moviesByCategory}
        }))
        .then((movies)=> setMoviesData(movies))

    }, [])

  return (
    <div className='browse-movies'>
        {moviesData.map(({category, movies})=> (
            <div key={category}>
                <h3>{category}</h3>
                <div className='movies-list'>
                    {movies?.map((movie) => (
                        <Poster posterPath={movie.poster_path} title={movie.title} key={movie.id} />
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}
