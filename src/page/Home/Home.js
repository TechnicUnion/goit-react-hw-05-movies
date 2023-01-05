import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trending, setTrending] = useState('');
  //   const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=894ef72300682f1db325dae2afe3e7e2`
    )
      .then(response => response.json())
      .then(trendingFilmsList => {
        console.log(trendingFilmsList);
        setTrending(trendingFilmsList.results);
        setStatus('resolved');
        return trendingFilmsList;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  }, []);

  if (status === 'resolved') {
    return (
      <div>
        <p>Trending</p>
        <ul>
          {trending.map(film => (
            <Link to="/movies/:movieId" key={film.id}>
              {film.title}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
