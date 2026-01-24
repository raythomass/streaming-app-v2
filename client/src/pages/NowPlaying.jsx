import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NowPlayingList from '../components/NowPlayingList'
import NowPlayingHero from '../components/NowPlayingHero';
const apiKey = import.meta.env.VITE_API_KEY
const bearerKey = import.meta.env.VITE_BEARER_KEY

export default function NowPlaying() {
  // Create state for movies fetched from APi
  // Create a hero movie that will always be the first movie called
  // Create thumbnails movies that will go in the grid below the hero
  const[theatreMovies, setTheatreMovies] = useState([])
  const heroMovie = theatreMovies[0]
  const listMovies = theatreMovies.slice(1)

  // API call to fetch the now playing movies
  //Bearer key is replaced by variable in .env file
  const fetchNowPlaying = async () => {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${bearerKey}`
        }
      };
// Make fetch using the url and options created before
// Turn response into JSON
// console.log the JSON returned and set the state array to all the results of the call
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setTheatreMovies(json.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchNowPlaying();
  },[])

  // If the call does not return, display a loading screen
  if (!heroMovie) {
      return <div>Loading...</div>
    }
  return (
    <>
    {/* <h1>Now Playing in Theatres</h1> */}
    <div className='now-playing-hero'>
      <NowPlayingHero key={heroMovie.id} hero={heroMovie}/>
    </div>

    <div className='now-playing-list'>
      {listMovies.map((movie) => (
          <Link 
            to={`/movies/${movie.id}`}
            className='now-playing-list-link'
          >
            <NowPlayingList movie={movie}/>
          </Link>
      ))}
    </div>
    </>
  );
}
