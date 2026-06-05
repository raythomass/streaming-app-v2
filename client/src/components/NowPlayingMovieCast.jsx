import React from 'react';

export default function NowPlayingMovieCast({cast}) {
  return (
    <div className='now-playing-movie-cast'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt="Picture Not Available" />
        </div>
        <div className='now-playing-movie-cast-details'>
            <h2>{cast.name}</h2>
            <p>{cast.character}</p>
        </div>
    </div>
  );
}
