import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieHero({hero}) {
  return (
    <>
    <div className='movie-hero-details'>
        <h2>{hero.title}</h2>
        <p>{hero.overview}</p>
        <div className='movie-hero-btns'>
          <div className='movie-hero-watch'>
            <h3>Watch Now</h3>
          </div>
          <div className='movie-hero-more'>
            <Link
            to={`/movies/${hero.id}`}
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
