import UiStore from './UiStore';
import FilmsStore from './FilmsStore';
import ActorsStore from './ActorsStore';

class RootStore {
  uiStore;

  filmsStore;

  actorStote;

  constructor() {
    this.uiStore = new UiStore(this);
    this.uiStore.init();
    this.filmsStore = new FilmsStore(this);
    this.filmsStore.init();
    this.actorStote = new ActorsStore(this);
  }
}

export default RootStore;
