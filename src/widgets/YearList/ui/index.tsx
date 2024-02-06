import React from 'react';
import { TypeFilmList } from '../../../features';
import { years } from '../../../entities';

const YearList: React.FC = () => (
  <TypeFilmList types={years} />
);

export default YearList;
