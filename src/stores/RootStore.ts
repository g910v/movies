import UiStore from './UiStore';
import FilmsStore from './FilmsStore';
import ActorsStore from './ActorsStore';
import SearchStore from './SearchStore';

class RootStore {
  uiStore;

  filmsStore;

  actorStote;

  searchStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.uiStore.init();
    this.filmsStore = new FilmsStore(this);
    this.filmsStore.init();
    this.actorStote = new ActorsStore(this);
    this.searchStore = new SearchStore(this);
  }
}

export default RootStore;
