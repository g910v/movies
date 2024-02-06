import { Response, kinoUnoffAxios, paramsSerializer } from '../../../shared/api/kinopoiskUnofficial/core';
import { TFetchMovieList, TFetchMovieQueryParams } from '../types/movieList';

const fetchMovieList = (query: TFetchMovieQueryParams): Response<TFetchMovieList> => kinoUnoffAxios.get('/v2.2/films', { params: query, paramsSerializer });

export default fetchMovieList;
