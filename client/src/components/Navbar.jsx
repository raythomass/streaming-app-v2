import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <div className='navbar'>
        <h2>StreamPlay+</h2>
        <div className='nav-list'>
            <Link className='nav-link' to={'/'}>
                <h3>Trending</h3> 
            </Link>
            <Link className='nav-link' to={'/movies'}>
                <h3>Movies</h3> 
            </Link>
            <Link className='nav-link' to={'/shows'}>
                <h3>TV Shows</h3> 
            </Link>
        </div>
    </div>
  );
}
