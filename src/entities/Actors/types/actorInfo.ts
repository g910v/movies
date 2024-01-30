import { GetResponse } from '../../../shared/api/kinopoiskDev/core';

export type TFetchActorInfo = GetResponse<'/v1.4/person/{id}'>

export type TActorInfo = TFetchActorInfo;
