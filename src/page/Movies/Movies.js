import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from 'components/SearchBar';
// import PropTypes from 'prop-types';
// import css from '../styles.module.css';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchingMovie, setSearchingMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

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
      setSearchQuery(data);
    }
  };

  if (status === 'idle') {
    return (
      <div>
        <p>Введіть запит для пошуку</p>
        <Searchbar onSubmit={formSubmitHandler} />
      </div>
    );
  }

  //   if (status === 'pending') {
  //     return <Loader />;
  //   }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }
  console.log(searchingMovie);
  if (searchingMovie) {
    return (
      <div>
        <Searchbar onSubmit={formSubmitHandler} />
        <ul>
          {searchingMovie[0].map(film => (
            <Link to="/movies/:movieId" key={film.id}>
              {film.title}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

// ImageGallery.propTypes = {
//   searchQuery: PropTypes.string,
//   page: PropTypes.number,
//   onClick: PropTypes.func,
//   newFetch: PropTypes.bool,
// };
