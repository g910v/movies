import React from 'react';
import countries from '../../../entities/Countries/consts/countries';
import { TypeFilmList } from '../../../features';

const CountryList: React.FC = () => (
  <TypeFilmList types={countries} />
);

export default CountryList;
