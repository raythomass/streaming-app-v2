const apiKey = import.meta.env.VITE_API_KEY
const bearerKey = import.meta.env.bearerKey

const fetchNowPlaying = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${bearerKey}`
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

export default {
    fetchNowPlaying
}