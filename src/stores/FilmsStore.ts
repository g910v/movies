/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';
import api from '../shared/api';
import { UnoffFilmsQueryParams, UnoffPremiersQueryParams } from '../shared/api/kinopoiskUnofficial/api-methods';

export interface IFilm {
  name: string,
  enName: string,
  rating?: number,
  duration?: number,
  premiereRu?: string,
  countries: string[],
  genres: string[],
  poster: string,
  year: number,
  kId: number,
}

export interface IFilters {
  type: 'FILM' | 'TV_SERIES',
  genre?: number,
  country?: number,
  // year?: string,
}

export interface IPremiereFiltesr {
  year: number,
  month: 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER',
}

class FilmsStore {
  filmList: IFilm[] = [];

  filmsLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  public getPremiereFilms(premiereFilters: IPremiereFiltesr) {
    this.fetchPremieres(premiereFilters);
  }

  public getFilms(filters: IFilters) {
    const formattedFilters: UnoffFilmsQueryParams = {
      order: 'RATING',
      type: filters.type,
      genres: filters.genre ? [filters.genre] : undefined,
      countries: filters.country ? [filters.country] : undefined,
    };
    this.fetchFilms(formattedFilters);
  }

  private async fetchPremieres(filters: UnoffPremiersQueryParams) {
    this.setFilmLoading(true);
    try {
      const { data: { items } } = await api.kinoUnoff.premiers.get(filters);
      const newData = items.map(f => ({
        name: f.nameRu ?? '',
        enName: f.nameEn ?? '',
        premiereRu: f.premiereRu ?? '',
        duration: f.duration ?? undefined,
        countries: f.countries?.slice(0, 3).map(i => i.country) ?? [],
        genres: f.genres?.slice(0, 3).map(i => i.genre) ?? [],
        poster: f.posterUrl ?? '',
        year: f.year ?? 0,
        kId: f.kinopoiskId ?? 0,
      }));
      this.setFilmList(newData);
    } catch (error) {
      console.log(error);
    }
    this.setFilmLoading(false);
  }

  private async fetchFilms(filters: UnoffFilmsQueryParams) {
    this.setFilmLoading(true);
    try {
      const { data: { items } } = await api.kinoUnoff.films.get(filters);
      const newData = items.map(f => ({
        name: f.nameRu ?? '',
        enName: f.nameOriginal ?? f.nameEn ?? '',
        rating: f.ratingKinopoisk ?? f.ratingImdb ?? 0,
        countries: f.countries?.slice(0, 3).map(i => i.country) ?? [],
        genres: f.genres?.slice(0, 3).map(i => i.genre) ?? [],
        poster: f.posterUrl ?? '',
        year: f.year ?? 0,
        kId: f.kinopoiskId ?? 0,
      }));
      this.setFilmList(newData);
    } catch (error) {
      console.log(error);
    }
    this.setFilmLoading(false);
  }

  private setFilmList(newData: IFilm[]): void {
    this.filmList = newData;
  }

  private setFilmLoading(loading: boolean): void {
    this.filmsLoading = loading;
  }
}

export default FilmsStore;
