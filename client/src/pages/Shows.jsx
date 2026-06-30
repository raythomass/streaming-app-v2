import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowHero from '../components/ShowHero';
const apiKey = import.meta.env.VITE_API_KEY
const bearerKey = import.meta.env.VITE_BEARER_KEY

export default function Shows() {
  const [showList, setShowList] = useState([])
  const heroShow = showList[0]
  const listShows = showList.slice(1, -1)

  const fetchTrendingShows = async () => {
        const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
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
          console.log(json.results)
          setShowList(json.results)
        })
        .catch(err => console.error(err));
    }
  
    useEffect(() => {
      fetchTrendingShows();
    },[])

    if (!heroShow) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
    <div className='show-hero'>
      <ShowHero key={heroShow.id} hero={heroShow}/>
    </div>
    </>
  );
}
