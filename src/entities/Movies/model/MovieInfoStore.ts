/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import fetchMovieInfo from '../api/fetchMovieInfo';
import { TMovieInfo } from '../types/movieInfo';
import type RootStore from '../../../app/model/RootStore';

class MovieInfoStore {
  private _movieInfo: TMovieInfo | undefined = undefined;

  private _movieInfoLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  get movieInfo() {
    return this._movieInfo;
  }

  get movieInfoLoading() {
    return this._movieInfoLoading;
  }

  public getMovie(id: string) {
    this.fetchMovie(id);
  }

  private async fetchMovie(id: string) {
    this.setMovieInfoLoading(true);
    this.setMovieInfo(undefined);
    try {
      const { data } = await fetchMovieInfo(id);
      this.setMovieInfo(data);
    } catch (error) {
      console.log(error);
    }
    this.setMovieInfoLoading(false);
  }

  private setMovieInfo(newData: TMovieInfo | undefined): void {
    this._movieInfo = newData;
  }

  private setMovieInfoLoading(loading: boolean): void {
    this._movieInfoLoading = loading;
  }
}

export default MovieInfoStore;
