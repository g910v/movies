import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../shared/routes';
import Spinner from './styled/Spinner';

const FilmsPage = lazy(() => import('../pages/FilmsPage'));
const SeriesPage = lazy(() => import('../pages/SeriesPage'));

const SpinContainer = styled.div`
  margin-top: 35vh;
`;

const Content: React.FC = () => (
  <Suspense fallback={(
    <SpinContainer>
      <Spinner size={130} strokeWidth={5} />
    </SpinContainer>
    )}
  >
    <Routes>
      <Route path="/" element={<Navigate to={routes.PREMIERES.path} />} />
      <Route path={routes.FILMS.path} element={<FilmsPage />} />
      <Route path={routes.SERIES.path} element={<SeriesPage />} />
    </Routes>
  </Suspense>
);

export default Content;
