/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import fetchSearchMovie from '../api/fetchSearchMovie';
import type RootStore from '../../../app/model/RootStore';

export interface ISearchResults {
  name: string,
  year?: string,
  rating?: string,
  kId: number,
}

class MovieSearchStore {
  private _searchResults: ISearchResults[] | undefined = undefined;

  private _searchLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  get searchResults() {
    return this._searchResults;
  }

  get searchLoading() {
    return this._searchLoading;
  }

  public resetSearchResults() {
    this.setSearchResults(undefined);
  }

  public searchFilms(value: string) {
    this.fetchFilms(value);
  }

  private async fetchFilms(value: string) {
    this.setSearchLoading(true);
    this._searchResults = [];
    try {
      const { data: { films } } = await fetchSearchMovie({
        keyword: value,
      });
      const newData = films.map(f => ({
        name: f.nameRu ?? '',
        rating: f.rating,
        kId: f.filmId ?? 0,
        year: f.year,
      })).filter(i => !!i.name);
      this.setSearchResults(newData);
    } catch (error) {
      console.log(error);
    }
    this.setSearchLoading(false);
  }

  private setSearchResults(newData: ISearchResults[] | undefined): void {
    this._searchResults = newData;
  }

  private setSearchLoading(loading: boolean): void {
    this._searchLoading = loading;
  }
}

export default MovieSearchStore;
