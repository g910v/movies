import React from 'react';
import years from '../../../entities/Years/consts/years';
import { TypeFilmList } from '../../../features';

const YearList: React.FC = () => (
  <TypeFilmList types={years} />
);

export default YearList;
