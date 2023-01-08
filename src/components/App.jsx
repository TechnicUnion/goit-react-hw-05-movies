import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Home from 'page/Home/Home';
import Movies from 'page/Movies/Movies';
import MovieDetails from 'page/MovieDetails/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

// const About = lazy(() => import('../pages/About'));
// const Home = lazy(() => import('../pages/Home'));
// const ProductDetails = lazy(() => import('../pages/ProductDetails'));
// const Products = lazy(() => import('../pages/Products'));
// const Mission = lazy(() => import('./Mission'));
// const Team = lazy(() => import('./Team'));
// const Reviews = lazy(() => import('./Reviews'));

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
