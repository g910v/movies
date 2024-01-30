import { Id, Response, kinoDevAxios } from '../../../shared/api/kinopoiskDev/core';
import { TFetchActorInfo } from '../types/actorInfo';

const fetchActorInfo = (id: Id): Response<TFetchActorInfo> => kinoDevAxios.get(`/v1.4/person/${id}`);

export default fetchActorInfo;
