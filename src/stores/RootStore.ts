import {
  UiStore, FilmInfoStore, FilmsStore, ActorsStore, SearchStore, ActorInfoStore,
} from '.';

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
    this.filmsStore = new FilmsStore(this);
    this.filmsStore.init();
    this.actorStote = new ActorsStore(this);
    this.searchStore = new SearchStore(this);
    this.filmInfoStore = new FilmInfoStore(this);
    this.actorInfoStore = new ActorInfoStore(this);
  }
}

export default RootStore;
