import React, { Suspense, lazy } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import routes from '../shared/routes';
import Layout from './Layout/ui';
import {
  CountryList, GenreList, MovieList, YearList,
} from '../widgets';
import { Spinner } from '../shared/ui';

const MoviesPage = lazy(() => import('./MoviesPage/ui'));
const PremieresPage = lazy(() => import('./PremieresPage/ui'));
const ActorsPage = lazy(() => import('./ActorsPage/ui'));
const SavedPage = lazy(() => import('./SavedPage/ui'));
const MovieInfoPage = lazy(() => import('./MovieInfoPage/ui'));
const ActorInfoPage = lazy(() => import('./ActorInfoPage/ui'));

const SpinContainer = styled.div`
  margin-top: 45vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const pageComponent = (type: 'FILM' | 'TV_SERIES') => (
  <>
    <Route path="top" element={<MovieList type={type} isTop />} />
    <Route path="genres" element={<GenreList />} />
    <Route path="genres/:genre" element={<MovieList type={type} />} />
    <Route path="years" element={<YearList />} />
    <Route path="years/:year" element={<MovieList type={type} />} />
    <Route path="countries" element={<CountryList />} />
    <Route path="countries/:country" element={<MovieList type={type} />} />
  </>
);

const Content: React.FC = () => (
  <Suspense fallback={(
    <SpinContainer>
      <Spinner size={70} strokeWidth={3} />
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
        <Route path={routes.ACTORS.path} element={<ActorsPage />} />
        <Route path={routes.SAVED.path} element={<SavedPage />} />
        <Route path="movie/:movieId" element={<MovieInfoPage />} />
        <Route path="person/:personId" element={<ActorInfoPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Content;
