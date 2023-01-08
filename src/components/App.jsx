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
