import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  FilmInfo,
  Poster,
  InformationList,
  InformationItem,
} from './MovieDetails.styled';

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
          <button>
            <Link to={backLinkHref}>
              <AiOutlineArrowLeft /> Go back
            </Link>
          </button>
          <FilmInfo>
            <Poster
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
          </FilmInfo>
        </div>
      )}
      <div>
        <p>Additional information</p>
        <InformationList>
          <InformationItem>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </InformationItem>
          <InformationItem>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </InformationItem>
        </InformationList>
      </div>
      <Outlet />
    </div>
  );
}
