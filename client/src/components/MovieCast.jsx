import React from 'react';

export default function MovieCast({cast}) {
  return (
    <div className='movie-cast'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt="Picture Not Available" />
        </div>
        <div className='movie-cast-details'>
            <h2>{cast.name}</h2>
            <p>{cast.character}</p>
        </div>
    </div>
  );
}
