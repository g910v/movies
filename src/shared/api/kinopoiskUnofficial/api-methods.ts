import axios from 'axios';
import {
  API_URL, Response, GetResponse, GetQueryParams,
} from './core';

export type UnoffFilmsGetResponse = GetResponse<'/api/v2.2/films'>
export type UnoffFilmsQueryParams = GetQueryParams<'/api/v2.2/films'>

export type UnoffPremiersGetResponse = GetResponse<'/api/v2.2/films/premieres'>
export type UnoffPremiersQueryParams = GetQueryParams<'/api/v2.2/films/premieres'>

export type UnoffCollectionsGetResponse = GetResponse<'/api/v2.2/films/collections'>
export type UnoffCollectionsQueryParams = GetQueryParams<'/api/v2.2/films/collections'>

const kinoUnoffAxios = axios.create({
  baseURL: API_URL,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // 'X-Api-Key': 'fadfb749-8df9-412e-aa8e-85a55e038da5',
  },
});

const paramsSerializer = (params: Record<string, string[] | string>) => {
  let formattedParams: string = '';
  let isFirst = true;
  Object.keys(params).forEach(key => {
    if (params[key]) {
      if (Array.isArray(params[key])) {
        (params[key] as string[]).forEach(value => {
          formattedParams += `${isFirst ? '' : '&'}${key}=${value}`;
          isFirst = false;
        });
        return;
      }
      formattedParams += `${isFirst ? '' : '&'}${key}=${params[key]}`;
      isFirst = false;
    }
  });
  return formattedParams;
};

const kinoUnoff = {
  films: {
    get: (query?: UnoffFilmsQueryParams): Response<UnoffFilmsGetResponse> => kinoUnoffAxios.get('/v2.2/films', { params: query, paramsSerializer }),
  },
  premiers: {
    get: (query: UnoffPremiersQueryParams): Response<UnoffPremiersGetResponse> => kinoUnoffAxios.get('/v2.2/films/premieres', { params: query }),
  },
  collections: {
    get: (query: UnoffCollectionsQueryParams): Response<UnoffCollectionsGetResponse> => kinoUnoffAxios.get('/v2.2/films/collections', { params: query }),
  },
};

export default kinoUnoff;
