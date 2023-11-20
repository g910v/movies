import axios from 'axios';
import {
  API_URL, Response, GetResponse, GetQueryParams,
} from './core';

export type DevFilmsGetResponse = GetResponse<'/v1.4/movie'>
export type DevFilmsQueryParams = GetQueryParams<'/v1.4/movie'>

const kinoDevAxios = axios.create({
  baseURL: API_URL,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // 'X-Api-Key': '0J4BCGG-DPR4PD7-MGRT1E3-X8X0DZP',
  },
});

const paramsSerializer = (params: Record<string, string[]>) => {
  let formattedParams: string = '';
  let isFirst = true;
  Object.keys(params).forEach(key => {
    if (params[key]) {
      params[key].forEach(value => {
        formattedParams += `${isFirst ? '' : '&'}${key}=${value}`;
        isFirst = false;
      });
    }
  });
  return formattedParams;
};

const kinoDev = {
  films: {
    get: (query?: DevFilmsQueryParams): Response<DevFilmsGetResponse> => kinoDevAxios.get('/v1.4/movie', {
      params: query,
      paramsSerializer,
    }),
  },
};

export default kinoDev;
