import React from 'react';

export default function NowPlayingList({movie}) {
  return (
    <div className='now-playing-thumbnails'>
      <div className='now-playing-thumbnails-details'>
        {/* <h3>{title}</h3> */}
      </div>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="hero image movie poster" />
    </div>
  );
}
