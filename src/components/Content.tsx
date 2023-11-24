import React, { Suspense, lazy } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import routes from '../shared/routes';
import Spinner from './styled/Spinner';
import TypeFilmCard from './TypeFilmCard';
import genres from '../shared/genres';
import countries from '../shared/countries';
import Layout from './Layout';
import MovieList from './MovieList';
import years from '../shared/years';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const PremieresPage = lazy(() => import('../pages/PremieresPage'));

const SpinContainer = styled.div`
  margin-top: 45vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const pageComponent = (type: 'FILM' | 'TV_SERIES') => (
  <>
    <Route path="top" element={<MovieList type={type} isTop />} />
    <Route path="genres" element={<TypeFilmCard types={genres} />} />
    <Route path="genres/:genre" element={<MovieList type={type} />} />
    <Route path="years" element={<TypeFilmCard types={years} />} />
    <Route path="years/:year" element={<MovieList type={type} />} />
    <Route path="countries" element={<TypeFilmCard types={countries} />} />
    <Route path="countries/:country" element={<MovieList type={type} />} />
  </>
);

const Content: React.FC = () => (
  <Suspense fallback={(
    <SpinContainer>
      <Spinner size={70} strokeWidth={4} />
    </SpinContainer>
    )}
  >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={routes.PREMIERES.path} />} />
        <Route path={routes.PREMIERES.path} element={<PremieresPage />} />
        <Route path={`${routes.FILMS.path}/*`} element={<MoviesPage pageName={routes.FILMS.name} />}>
          {pageComponent('FILM')}
        </Route>
        <Route path={routes.SERIES.path} element={<MoviesPage pageName={routes.SERIES.name} />}>
          {pageComponent('TV_SERIES')}
        </Route>
      </Route>
    </Routes>
  </Suspense>
);

export default Content;
