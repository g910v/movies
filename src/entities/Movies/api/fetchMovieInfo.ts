import { Id, Response, kinoDevAxios } from '../../../shared/api/kinopoiskDev/core';
import { TFetchMovieInfo } from '../types/movieInfo';

const fetchMovieInfo = (id: Id): Response<TFetchMovieInfo> => kinoDevAxios.get(`/v1.4/movie/${id}`);

export default fetchMovieInfo;
