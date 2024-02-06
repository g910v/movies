import { Response, kinoUnoffAxios } from '../../../shared/api/kinopoiskUnofficial/core';
import { TFetchPremiers, TFetchPremiersQueryParams } from '../types/movieList';

const fetchPremiereList = (query: TFetchPremiersQueryParams): Response<TFetchPremiers> => kinoUnoffAxios.get('/v2.2/films/premieres', { params: query });

export default fetchPremiereList;
