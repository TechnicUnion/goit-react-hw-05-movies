import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
// import PropTypes from 'prop-types';
// import css from '../styles.module.css';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMomieInfo] = useState(null);
  const [yearRelease, setYearRelease] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=894ef72300682f1db325dae2afe3e7e2`
    )
      .then(response => response.json())
      .then(movieInfo => {
        const date = new Date(movieInfo.release_date);
        setYearRelease(date.getFullYear());
        return setMomieInfo(movieInfo);
      })
      .catch(error => {
        return error;
      });
  }, [movieId]);

  return (
    <div>
      {movieInfo && (
        <div>
          <Link to={backLinkHref}>
            <AiOutlineArrowLeft /> Go back
          </Link>

          <img
            src={`https://www.themoviedb.org/t/p/w300/${movieInfo.poster_path}`}
            alt="Poster"
          />
          <div>
            <h2>
              {movieInfo.original_title} ({yearRelease})
            </h2>
            <p>User Score: {Math.round(movieInfo.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <p>{movieInfo.genres.map(ganr => ganr.name).join(' ')}</p>
          </div>
        </div>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

// ImageGallery.propTypes = {
//   searchQuery: PropTypes.string,
//   page: PropTypes.number,
//   onClick: PropTypes.func,
//   newFetch: PropTypes.bool,
// };
