import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import MovieCast from '../components/MovieCast';
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
      <div className='np-highlight'>
        <img src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`} alt="" />
        <div className='np-overview'>
          <h1>{singleMovie.title}</h1>
          <div className='np-details'>
            <div className='np-desc'>
              <p>{singleMovie.overview}</p>
            </div>
            <div className='np-extras'>
              <p>Runtime: {singleMovie.runtime} minutes</p>
              <p>Rating: {singleMovie.vote_average} / 10</p>
              <div className='np-genres'>
                <p id='genre'>Genres:</p>
                <div className='genres'>
                  {singleMovie.genres.map((genre) => (
                    <small>{genre.name}</small>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='np-btns'>
            <div className='np-play'>
              <FontAwesomeIcon icon={faPlay} />
              <h3>Play</h3>
            </div>
            <div className='np-trailer'>
              <h3>Trailer</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 id='cast'>Cast:</h2>
      </div>
      <div className='now-playing-movie-credits'>
        {singleMovie && singleMovie.credits.cast.map((cast) => (
          <MovieCast cast={cast}/>
        ))}
      </div>
    </div>
  );
}
