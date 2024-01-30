import ActorInfoStore from '../../entities/Actors/model/ActorInfoStore';
import ActorsStore from '../../entities/Actors/model/ActorStore';
import MovieInfoStore from '../../entities/Movies/model/MovieInfoStore';
import MovieSearchStore from '../../features/MoviesSearch/model/MovieSearchStore';
import MoviesStore from '../../entities/Movies/model/MoviesStore';
import UiStore from '../../shared/model/UiStore';

class RootStore {
  uiStore;

  filmsStore;

  actorStote;

  searchStore;

  filmInfoStore;

  actorInfoStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.uiStore.init();
    this.filmsStore = new MoviesStore(this);
    this.filmsStore.init();
    this.actorStote = new ActorsStore(this);
    this.searchStore = new MovieSearchStore(this);
    this.filmInfoStore = new MovieInfoStore(this);
    this.actorInfoStore = new ActorInfoStore(this);
  }
}

export default RootStore;
