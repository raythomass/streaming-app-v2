import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList'
import MovieHero from '../components/MovieHero';
const apiKey = import.meta.env.VITE_API_KEY
const bearerKey = import.meta.env.VITE_BEARER_KEY

export default function Movies() {
  const [movieList, setMovieList] = useState([])
  const heroMovie = movieList[0]
  const listMovies = movieList.slice(1, -1)

  const fetchPopularMovies = async () => {
      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${bearerKey}`
        }
      };
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setMovieList(json.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchPopularMovies();
  },[])

  if (!heroMovie) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
    {/* <h1>Now Playing in Theatres</h1> */}
    <div className='now-playing-hero'>
      <MovieHero key={heroMovie.id} hero={heroMovie}/>
    </div>

    <div className='now-playing-list'>
      {listMovies.map((movie) => (
          <Link 
            to={`/movies/${movie.id}`}
            className='now-playing-list-link'
          >
            <MovieList movie={movie}/>
          </Link>
      ))}
    </div>
    </>
  );
}
