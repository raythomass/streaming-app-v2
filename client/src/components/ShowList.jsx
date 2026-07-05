import React from 'react';

export default function ShowList({show}) {
  return (
    <div className='show-list-thumbnails'>
        <div className='show-list-thumbnails-details'>

        </div>
        <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt="hero image show poster" />
    </div>
  );
}
