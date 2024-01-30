import React from 'react';
import { TypeFilmList } from '../../../features';
import { countries } from '../../../entities';

const CountryList: React.FC = () => (
  <TypeFilmList types={countries} />
);

export default CountryList;
