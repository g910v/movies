/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import type RootStore from '../../../app/model/RootStore';
import fetchMovieList from '../api/fetchMovieList';
import {
  IFilters, IMovie, ITopFilters, TFetchCollectionsQueryParams, TFetchMovieQueryParams, TFetchPremiersQueryParams,
} from '../types/movieList';
import fetchTopMovieList from '../api/fetchTopMovieList';
import fetchPremiereList from '../api/fetchPremiereList';

class MoviesStore {
  filmList: IMovie[] = [];

  savedFilms: IMovie[] = [];

  filmsLoading = false;

  filmTotalPages = 0;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  init(): void {
    const films = JSON.parse(localStorage.getItem('saved') ?? '[]');
    this.savedFilms = films;
  }

  public changeSavedFilms(film: IMovie, add: boolean) {
    const currentFilm = this.filmList.find(i => i.kId === film.kId);
    if (currentFilm) currentFilm.saved = !currentFilm.saved;
    if (add) {
      this.addSavedFilm(film);
    } else {
      this.removeSavedFilm(film.kId);
    }
  }

  private removeSavedFilm(filmId: number) {
    this.savedFilms = this.savedFilms.filter(i => i.kId !== filmId);
    localStorage.setItem('saved', JSON.stringify(this.savedFilms));
  }

  private addSavedFilm(film: IMovie) {
    this.savedFilms.unshift(film);
    localStorage.setItem('saved', JSON.stringify(this.savedFilms));
  }

  public isSavedFilm(id: number): boolean {
    const savedFilm = this.savedFilms.find(i => i.kId === id);
    if (savedFilm) {
      return true;
    }
    return false;
  }

  public getPremiereFilms(premiereFilters: TFetchPremiersQueryParams) {
    this.fetchPremieres(premiereFilters);
  }

  private async fetchPremieres(filters: TFetchPremiersQueryParams) {
    this.setFilmLoading(true);
    this.filmList = [];
    try {
      const { data: { items } } = await fetchPremiereList(filters);
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
        posterPreview: f.posterUrlPreview,
        saved: this.isSavedFilm(f.kinopoiskId),
      }));
      this.setFilmList(newData);
    } catch (error) {
      console.log(error);
    }
    this.setFilmLoading(false);
  }

  public getTopMovies(filter: ITopFilters) {
    this.fetchTopFilms(filter);
  }

  private async fetchTopFilms(filters: TFetchCollectionsQueryParams) {
    this.setFilmLoading(true);
    if (filters?.page === 1) this.filmList = [];
    try {
      const { data: { items, totalPages } } = await fetchTopMovieList(filters);
      this.setFilmTotalPages(totalPages);
      const newData = items.map(f => ({
        name: f.nameRu ?? '',
        enName: f.nameOriginal ?? f.nameEn ?? '',
        rating: f.ratingKinopoisk ?? 0,
        countries: f.countries?.slice(0, 3).map(i => i.country) ?? [],
        genres: f.genres?.slice(0, 3).map(i => i.genre) ?? [],
        poster: f.posterUrl ?? '',
        year: f.year as unknown as number ?? 0,
        kId: f.kinopoiskId ?? 0,
        posterPreview: f.posterUrlPreview ?? '',
        saved: this.isSavedFilm(f.kinopoiskId ?? -1),
      }));
      this.setFilmList([...this.filmList, ...newData]);
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
    const formattedFilters: TFetchMovieQueryParams = {
      order: 'RATING',
      type: filters.type,
      genres: filters.genre ? [filters.genre] : undefined,
      countries: filters.country ? [filters.country] : undefined,
      page: filters.page,
      yearFrom: startYear,
      yearTo: endYear,
    };
    this.fetchFilms(formattedFilters);
  }

  private async fetchFilms(filters: TFetchMovieQueryParams) {
    this.setFilmLoading(true);
    if (filters?.page === 1) this.filmList = [];
    try {
      const { data: { items, totalPages } } = await fetchMovieList(filters);
      this.setFilmTotalPages(totalPages);
      const newData = items.map(f => ({
        name: f.nameRu ?? '',
        enName: f.nameOriginal ?? f.nameEn ?? '',
        rating: f.ratingKinopoisk ?? f.ratingImdb ?? 0,
        countries: f.countries?.slice(0, 3).map(i => i.country) ?? [],
        genres: f.genres?.slice(0, 3).map(i => i.genre) ?? [],
        poster: f.posterUrl ?? '',
        year: f.year ?? 0,
        kId: f.kinopoiskId ?? 0,
        posterPreview: f.posterUrlPreview ?? '',
        saved: this.isSavedFilm(f.kinopoiskId ?? -1),
      }));
      this.setFilmList([...this.filmList, ...newData]);
    } catch (error) {
      console.log(error);
    }
    this.setFilmLoading(false);
  }

  private setFilmList(newData: IMovie[]): void {
    this.filmList = newData;
  }

  private setFilmLoading(loading: boolean): void {
    this.filmsLoading = loading;
  }

  private setFilmTotalPages(count: number) :void {
    this.filmTotalPages = count;
  }
}

export default MoviesStore;
