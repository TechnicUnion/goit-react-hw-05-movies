import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Searchbar from 'components/SearchBar';

export default function Movies() {
  const [searchingMovie, setSearchingMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setStatus('pending');
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=894ef72300682f1db325dae2afe3e7e2&query=${searchQuery}`
    )
      .then(response => response.json())
      .then(movieList => {
        setStatus('resolved');
        return setSearchingMovie([movieList.results]);
      })
      .catch(error => {
        setStatus('rejected');
        return setError(error);
      });
  }, [searchQuery]);

  const formSubmitHandler = data => {
    if (searchQuery !== data) {
      setSearchParams(data !== '' ? { query: data } : {});
    }
    return setStatus('idle');
  };

  if (status === 'idle') {
    return (
      <div>
        <p>Enter the title of the movie to search</p>
        <Searchbar onSubmit={formSubmitHandler} />
      </div>
    );
  }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <Searchbar onSubmit={formSubmitHandler} />
        {searchingMovie[0].length > 0 ? (
          <ul>
            {searchingMovie[0].map(film => (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>
                  {film.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies were found for your request</p>
        )}
      </div>
    );
  }
}
