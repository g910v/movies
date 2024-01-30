import { Response, kinoUnoffAxios, paramsSerializer } from '../../../shared/api/kinopoiskUnofficial/core';
import { TFetchMovieSearch, TFetchMovieSearchQueryParams } from '../types/movieSearch';

const fetchSearchMovie = (query: TFetchMovieSearchQueryParams): Response<TFetchMovieSearch> => kinoUnoffAxios.get('/v2.1/films/search-by-keyword', { params: query, paramsSerializer });

export default fetchSearchMovie;
