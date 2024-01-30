import { GetResponse } from '../../../shared/api/kinopoiskDev/core';

export type TFetchMovieInfo = GetResponse<'/v1.4/movie/{id}'>

export type TMovieInfo = TFetchMovieInfo;
