import {
  UiStore, FilmInfoStore, FilmsStore, ActorsStore, SearchStore,
} from '.';

class RootStore {
  uiStore;

  filmsStore;

  actorStote;

  searchStore;

  filmInfoStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.uiStore.init();
    this.filmsStore = new FilmsStore(this);
    this.filmsStore.init();
    this.actorStote = new ActorsStore(this);
    this.searchStore = new SearchStore(this);
    this.filmInfoStore = new FilmInfoStore(this);
  }
}

export default RootStore;
