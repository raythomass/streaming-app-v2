import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const apiKey = import.meta.env.VITE_API_KEY
const bearerKey = import.meta.env.VITE_BEARER_KEY

export default function NowPlayingMovie() {
  const [singleMovie, setSingleMovie] = useState(null)
  const {id} = useParams()

    const fetchSingleMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
      <h1>{singleMovie.title}</h1>
      <p>{singleMovie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path}`} alt="hero image movie poster" />
    </div>
  );
}
