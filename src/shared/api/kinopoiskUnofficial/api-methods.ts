import axios from 'axios';
import {
  API_URL, Response, GetResponse, GetQueryParams,
} from './core';

export type UnoffFilmsGetResponse = GetResponse<'/api/v2.2/films'>
export type UnoffFilmsQueryParams = GetQueryParams<'/api/v2.2/films'>

const kinoUnoffAxios = axios.create({
  baseURL: `${API_URL}`,
});

const kinoUnoff = {
  films: {
    get: (query?: UnoffFilmsQueryParams): Response<UnoffFilmsGetResponse> => kinoUnoffAxios.get('/v2.2/films', { params: query }),
  },
};

export default kinoUnoff;
