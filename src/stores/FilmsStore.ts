/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';
import api from '../shared/api';
import { UnoffCollectionsQueryParams, UnoffFilmsQueryParams, UnoffPremiersQueryParams } from '../shared/api/kinopoiskUnofficial/api-methods';

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
  year?: number,
}

export interface ITopFilters {
  type: 'TOP_250_TV_SHOWS' | 'TOP_250_MOVIES'
}

export interface IPremiereFilters extends UnoffPremiersQueryParams {}

class FilmsStore {
  filmList: IFilm[] = [];

  filmsLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  public getPremiereFilms(premiereFilters: IPremiereFilters) {
    this.fetchPremieres(premiereFilters);
  }

  private async fetchPremieres(filters: UnoffPremiersQueryParams) {
    this.setFilmLoading(true);
    this.filmList = [];
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

  public getTopMovies(filter: ITopFilters) {
    this.fetchTopFilms({ ...filter, page: 1 });
  }

  private async fetchTopFilms(filters: UnoffCollectionsQueryParams) {
    this.setFilmLoading(true);
    this.filmList = [];
    try {
      const { data: { items } } = await api.kinoUnoff.collections.get(filters);
      const newData = items.map(f => ({
        name: f.nameRu ?? '',
        enName: f.nameOriginal ?? f.nameEn ?? '',
        rating: f.ratingKinopoisk ?? 0,
        countries: f.countries?.slice(0, 3).map(i => i.country) ?? [],
        genres: f.genres?.slice(0, 3).map(i => i.genre) ?? [],
        poster: f.posterUrl ?? '',
        year: f.year as unknown as number ?? 0,
        kId: f.kinopoiskId ?? 0,
      }));
      this.setFilmList(newData);
    } catch (error) {
      console.log(error);
    }
    this.setFilmLoading(false);
  }

  public getFilms(filters: IFilters) {
    let startYear;
    let endYear;
    switch (filters.year) {
      case 2010:
        startYear = 2010;
        endYear = 2014;
        break;
      case 2000:
        startYear = 2000;
        endYear = 2009;
        break;
      case 1990:
        startYear = 1990;
        endYear = 1999;
        break;
      case 1980:
        startYear = 1980;
        endYear = 1989;
        break;
      default:
        startYear = filters.year;
        endYear = filters.year;
    }
    const formattedFilters: UnoffFilmsQueryParams = {
      order: 'RATING',
      type: filters.type,
      genres: filters.genre ? [filters.genre] : undefined,
      countries: filters.country ? [filters.country] : undefined,
      page: 1,
      yearFrom: startYear,
      yearTo: endYear,
    };
    console.log(formattedFilters, filters.year);
    this.fetchFilms(formattedFilters);
  }

  private async fetchFilms(filters: UnoffFilmsQueryParams) {
    this.setFilmLoading(true);
    this.filmList = [];
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
