import { Response, kinoUnoffAxios } from '../../../shared/api/kinopoiskUnofficial/core';
import { TFetchCollectionsQueryParams, TFetchMovieList } from '../types/movieList';

const fetchTopMovieList = (query: TFetchCollectionsQueryParams): Response<TFetchMovieList> => kinoUnoffAxios.get('/v2.2/films/collections', { params: query });

export default fetchTopMovieList;
