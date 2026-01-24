import React from 'react';

export default function NowPlayingHero({hero}) {
  return (
    <>
    <div className='now-playing-hero-details'>
        <h2>{hero.title}</h2>
        <p>{hero.overview}</p>
        <div className='now-playing-hero-btns'>
          <div className='now-playing-hero-watch'>
            <h3>Watch Now</h3>
          </div>
          <div className='now-playing-hero-more'>
            <h3>More Info</h3>
          </div>
      </div>
      </div>
      <img src={`https://image.tmdb.org/t/p/original${hero.backdrop_path}`} alt="hero image movie poster" />
    </>
  );
}
