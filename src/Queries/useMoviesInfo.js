import axios from 'axios';
import envConf from '../conf/env.config';
import { useState, useEffect } from 'react';
import { genreId } from '../utils/data';

async function getMoviesData(genreId) {

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
      with_genres: `${genreId}`
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${envConf.moviesAccessToken}`
    }
  };
  
  try {
    return await axios.request(options);
    } catch (error) {
    throw new error;
  }

}

export default function useMoviesInfo() {
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
      useEffect(()=> {
          const categories = JSON.parse(localStorage.getItem('categories'));
          Promise.all(categories.map(async (cat)=> {
              const response = await getMoviesData(genreId[cat]);
              const random = Math.floor(Math.random() * (response.data.results.length-3))
              const moviesByCategory = response.data.results.slice(random, random+4);
              return {category: cat, movies: moviesByCategory}
          }))
          .then((movies)=> {
            setMoviesData(movies)
          })
          .catch((error)=> setError(true))
          .finally(()=> setLoading(false))
  
      }, [])

    return [moviesData, error, loading];
}
