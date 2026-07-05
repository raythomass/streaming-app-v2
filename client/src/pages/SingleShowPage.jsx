import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import MovieCast from '../components/MovieCast';
import ShowEpisode from '../components/ShowEpisode';
const apiKey = import.meta.env.VITE_API_KEY
const bearerKey = import.meta.env.VITE_BEARER_KEY

export default function SingleShowPage() {
  const [singleShow, setSingleShow] = useState(null)
  const [singleSeason, setSingleSeason] = useState()
  const [selectedSeason, setSelectedSeason] = useState(1)
  const {id} = useParams()

  const fetchSingleShow = async () => {
      const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US&append_to_response=credits`;
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
          setSingleShow(json)
        })
        .catch(err => console.error(err));
    };

    const fetchSingleSeason = async () => {
      const url = `https://api.themoviedb.org/3/tv/${id}/season/${selectedSeason}?language=en-US`;
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
          setSingleSeason(json)
        })
        .catch(err => console.error(err));
    };


    useEffect(() => {
      fetchSingleShow()
      fetchSingleSeason()
    }, [id, selectedSeason]);

    const handleSeasonChange = (e) => {
      setSelectedSeason(Number(e.target.value));
    };



    if (!singleShow) {
      return <div>Loading...</div>;
    }


  return (
    <div className='single-show'>
      <div className='single-show-gradient'>
        <div className='single-show-details'>
          <div>
            <h1>{singleShow.name}</h1>
            <small>{singleShow.number_of_episodes} episodes</small>
            <small>{singleShow.number_of_seasons} seasons</small>
            <p>{singleShow.overview}</p>
          </div>
          <div className='single-show-btns'>
            <div className='single-show-play'>
              <FontAwesomeIcon icon={faPlay} />
              <h3>Play</h3>
            </div>
            <div className='single-show-trailer'>
              <h3>Trailer</h3>
            </div>
          </div>
        </div>
          <img src={`https://image.tmdb.org/t/p/original${singleShow.backdrop_path}`} alt="hero image movie poster" />
      </div>
      <div className='season-selector'>
        <select
          id="season-selector"
          value={selectedSeason}
          onChange={handleSeasonChange}
        >
          {singleShow.seasons.map((season) => (
            <option key={season.id} value={season.season_number}>
              {season.name}
            </option>
          ))}
        </select>
      </div>
      <div className='show-episodes'>
        {singleSeason.episodes.map((episode) => (
          <ShowEpisode episode={episode}/>
        ))}
      </div>
    </div>
  );
}
