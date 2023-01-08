import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
