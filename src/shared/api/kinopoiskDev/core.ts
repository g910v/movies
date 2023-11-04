import { AxiosResponse } from 'axios';
import { paths } from './api-scheme'; // <- generated by openapi-typescript

type Paths = {
  [P in keyof paths]: P;
}[keyof paths]

type QueryKeys = {
  [P in Paths]: paths[P]['get'] extends { parameters: { query?: Record<string, unknown> } } ? P : never
}[Paths]

export type GetResponse<T extends Paths> = paths[T]['get']['responses'][200]['content']['application/json'];
export type GetQueryParams<T extends QueryKeys> = paths[T]['get']['parameters']['query']

export type Id = number | string;
export type Response<T extends GetResponse<Paths>> = Promise<AxiosResponse<T>>;

export const API_URL = `${import.meta.env.VITE_API_DEV_URL}`;