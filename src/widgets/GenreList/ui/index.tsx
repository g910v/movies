import React from 'react';
import genres from '../../../entities/Genres/consts/genres';
import { TypeFilmList } from '../../../features';

const GenreList: React.FC = () => (
  <TypeFilmList types={genres} />
);

export default GenreList;
