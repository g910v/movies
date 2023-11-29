import React, { } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useParams,
} from 'react-router-dom';
import { useRootStore } from '../hooks';

const MovieInfoPage: React.FC = () => {
  const {} = useRootStore();
  const params = useParams();

  return (
    <>Movie {params.movieId}</>
  );
};

export default observer(MovieInfoPage);
