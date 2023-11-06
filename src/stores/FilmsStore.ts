import { makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';
import api from '../shared/api';

interface IInfo {
  name?: string,
}
interface IFilm {
  name: string,
  enName: string,
  rating: number,
  countries: IInfo[],
  genres: IInfo[],
  poster: string,
  actors: string[],
  director: string[],
  year: number,
  movieLength: number,
}

class FilmsStore {
  filmList: IFilm[] = [];

  filmsLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  public async fetchFilms() {
    this.filmsLoading = true;
    try {
      const { data: { docs } } = await api.kinoDev.films.get();
      this.filmList = docs.map(f => {
        const actors = f.persons?.filter(p => p.enProfession === 'actor').map(p => p.name).slice(0, 3);
        const directors = f.persons?.filter(p => p.enProfession === 'director').map(p => p.name).slice(0, 3);
        return {
          name: f.name ?? '',
          enName: f.alternativeName ?? '',
          rating: f.rating?.imdb ?? 0,
          countries: f.countries ?? [],
          genres: f.genres ?? [],
          poster: f.poster?.url ?? '',
          actors: actors as string[],
          director: directors as string[],
          year: f.year ?? 0,
          movieLength: f.movieLength ?? 0,
        };
      });
      console.log(this.filmList);
    } catch (error) {
      console.log(error);
    }
    this.filmsLoading = false;
  }
}

export default FilmsStore;
