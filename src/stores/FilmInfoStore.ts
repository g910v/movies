/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';
import api from '../shared/api';
import { DevFilmGetOneResponse } from '../shared/api/kinopoiskDev/api-methods';

export interface IMovieInfo extends DevFilmGetOneResponse {}

class FilmInfoStore {
  movieInfo: IMovieInfo | undefined = undefined;

  movieInfoLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  public getMovie(id: string) {
    this.fetchMovie(id);
  }

  private async fetchMovie(id: string) {
    this.setMovieInfoLoading(true);
    try {
      const { data } = await api.kinoDev.films.getOne(id);
      this.setMovieInfo(data);
    } catch (error) {
      console.log(error);
    }
    this.setMovieInfoLoading(false);
  }

  private setMovieInfo(newData: IMovieInfo | undefined): void {
    this.movieInfo = newData;
  }

  private setMovieInfoLoading(loading: boolean): void {
    this.movieInfoLoading = loading;
  }
}

export default FilmInfoStore;
