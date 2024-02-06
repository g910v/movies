import React from 'react';
import { TypeFilmList } from '../../../features';
import { genres } from '../../../entities';

const GenreList: React.FC = () => (
  <TypeFilmList types={genres} />
);

export default GenreList;
