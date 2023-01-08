import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [trending, setTrending] = useState('');
  //   const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=894ef72300682f1db325dae2afe3e7e2`
    )
      .then(response => response.json())
      .then(trendingFilmsList => {
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
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
