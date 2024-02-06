import { GetQueryParams, GetResponse } from '../../../shared/api/kinopoiskUnofficial/core';

export type TFetchActorList = GetResponse<'/api/v1/persons'>
export type TFetchActorQueryParams = GetQueryParams<'/api/v1/persons'>

type TActor = Omit<TFetchActorList['items'][number], 'sex'>;

export interface IActor extends TActor {
  sex: string,
}
