import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowHero({hero}) {
  return (
    <>
    <div className='show-hero-details'>
        <h2>{hero.name}</h2>
        <p>{hero.overview}</p>
        <div className='show-hero-btns'>
          <div className='show-hero-watch'>
            <h3>Watch Now</h3>
          </div>
          <div className='show-hero-more'>
            <Link
            to={`/shows/${hero.id}`}
            className='Link'
            >
              <h3>More Info</h3>
            </Link>
          </div>
      </div>
      </div>
      <img src={`https://image.tmdb.org/t/p/original${hero.backdrop_path}`} alt="hero image movie poster" />
    </>
  );
}
