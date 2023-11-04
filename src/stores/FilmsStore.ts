import { makeAutoObservable } from 'mobx';
import { DevFilmsGetResponse } from '../shared/api/kinopoiskDev/api-methods';
import type RootStore from './RootStore';
import api from '../shared/api';

type Films = DevFilmsGetResponse['docs'];

class FilmsStore {
  filmList: Films = [];

  filmsLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  public async fetchFilms() {
    this.filmsLoading = true;
    try {
      const { data: { docs } } = await api.kinoDev.films.get();
      this.filmList = docs;
    } catch (error) {
      console.log(error);
    }
    this.filmsLoading = false;
  }
}

export default FilmsStore;
