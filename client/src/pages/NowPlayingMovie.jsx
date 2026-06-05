import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import NowPlayingMovieCast from '../components/NowPlayingMovieCast';
const apiKey = import.meta.env.VITE_API_KEY
const bearerKey = import.meta.env.VITE_BEARER_KEY

export default function NowPlayingMovie() {
  const [singleMovie, setSingleMovie] = useState(null)
  const {id} = useParams()

    const fetchSingleMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=credits`;
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
          console.log(json)
          setSingleMovie(json)
        })
        .catch(err => console.error(err));
    }
    useEffect(() => {
      fetchSingleMovie()
    }, [id])

    if (!singleMovie) {
      return <div>Loading...</div>;
    }
  return (
    <div className='now-playing-movie'>
      <div className='now-playing-movie-gradient'>
        <div className='now-playing-movie-details'>
        <div>
          <h1>{singleMovie.title}</h1>
          <small>{singleMovie.runtime} minutes</small>
          <small>{singleMovie.vote_average} / 10</small>
          <p>{singleMovie.overview}</p>
        </div>
        <div className='now-playing-movie-btns'>
          <div className='now-playing-movie-play'>
            <FontAwesomeIcon icon={faPlay} />
            <h3>Play</h3>
          </div>
          <div className='now-playing-movie-trailer'>
            <h3>Trailer</h3>
          </div>
        </div>
      </div>
        <img src={`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path}`} alt="hero image movie poster" />
      </div>
      <div className='now-playing-movie-credits'>
        <h2>Cast</h2>
        {singleMovie && singleMovie.credits.cast.map((cast) => (
          <NowPlayingMovieCast cast={cast}/>
        ))}
      </div>
    </div>
  );
}
