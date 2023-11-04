import axios from 'axios';
import {
  API_URL, Response, GetResponse, GetQueryParams,
} from './core';

export type DevFilmsGetResponse = GetResponse<'/v1.3/movie'>
export type DevFilmsQueryParams = GetQueryParams<'/v1.3/movie'>

const kinoDevAxios = axios.create({
  baseURL: `${API_URL}`,
});

const kinoDev = {
  films: {
    get: (query?: DevFilmsQueryParams): Response<DevFilmsGetResponse> => kinoDevAxios.get('/v1.3/movie', { params: query }),
  },
};

export default kinoDev;
