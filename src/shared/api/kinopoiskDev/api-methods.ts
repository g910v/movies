import axios from 'axios';
import {
  API_URL, Response, GetResponse, GetQueryParams,
} from './core';

export type DevFilmsGetResponse = GetResponse<'/v1.4/movie'>
export type DevFilmsQueryParams = GetQueryParams<'/v1.4/movie'>

const kinoDevAxios = axios.create({
  baseURL: `${API_URL}`,
});

const kinoDev = {
  films: {
    get: (query?: DevFilmsQueryParams): Response<DevFilmsGetResponse> => kinoDevAxios.get('/v1.4/movie', { params: query }),
  },
};

export default kinoDev;
