import { GetResponse, GetQueryParams } from '../../../shared/api/kinopoiskUnofficial/core';

export type TFetchMovieSearch = GetResponse<'/api/v2.1/films/search-by-keyword'>
export type TFetchMovieSearchQueryParams = GetQueryParams<'/api/v2.1/films/search-by-keyword'>

export type TMovieSearch = TFetchMovieSearch;
