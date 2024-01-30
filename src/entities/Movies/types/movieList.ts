import { GetQueryParams, GetResponse } from '../../../shared/api/kinopoiskUnofficial/core';

export type TFetchMovieList = GetResponse<'/api/v2.2/films'>
export type TFetchMovieQueryParams = GetQueryParams<'/api/v2.2/films'>

export type TFetchPremiers = GetResponse<'/api/v2.2/films/premieres'>
export type TFetchPremiersQueryParams = GetQueryParams<'/api/v2.2/films/premieres'>

export type TFetchCollections = GetResponse<'/api/v2.2/films/collections'>
export type TFetchCollectionsQueryParams = GetQueryParams<'/api/v2.2/films/collections'>

export type TPremiereFilters = TFetchPremiersQueryParams;

export interface IFilters {
  type: 'FILM' | 'TV_SERIES',
  genre?: number,
  country?: number,
  year?: number,
  page: number,
}

export interface ITopFilters {
  type: 'TOP_250_TV_SHOWS' | 'TOP_250_MOVIES'
  page: number,
}

export type TMovie = TFetchMovieList['items'][number];

export interface IMovie {
  name: string,
  enName: string,
  rating?: number,
  duration?: number,
  premiereRu?: string,
  countries: string[],
  genres: string[],
  poster: string,
  posterPreview: string,
  year: number,
  kId: number,
  saved: boolean,
}

export interface IMovieSavedNull extends Omit<IMovie, 'saved'> {
  saved: boolean | null,
}
