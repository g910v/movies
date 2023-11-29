import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useParams,
} from 'react-router-dom';
import { useRootStore } from '../hooks';

const MovieInfoPage: React.FC = () => {
  const { filmInfoStore } = useRootStore();
  const params = useParams();

  useEffect(() => {
    if (params.movieId) {
      filmInfoStore.getMovie(params.movieId);
    }
  }, [filmInfoStore, params]);

  return (
    <>Movie {params.movieId}</>
  );
};

export default observer(MovieInfoPage);
