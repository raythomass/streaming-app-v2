import React from 'react';

export default function ShowEpisode({episode}) {
  return (
    <div className='episode-cont'>
      <img src={`https://image.tmdb.org/t/p/original${episode.still_path}`} alt="still picture of the episode"/>
      <div className='episode-details'>
        <h4>{episode.episode_number}. {episode.name}</h4>
        <div>
          <small>{episode.runtime} minutes</small>
        </div>
        <p>{episode.overview}</p>
      </div>
    </div>
  );
}
