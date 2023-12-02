import axios from 'axios';
import envConf from '../conf/env.config';

export default async function useMoviesInfo(genreId) {
  
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
    console.error(error);
  }
  
}