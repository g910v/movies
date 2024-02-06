import { Response, kinoUnoffAxios } from '../../../shared/api/kinopoiskUnofficial/core';
import { TFetchActorList, TFetchActorQueryParams } from '../types/actorList';

const fetchActorList = (query: TFetchActorQueryParams): Response<TFetchActorList> => kinoUnoffAxios.get('/v1/persons', { params: query });

export default fetchActorList;
