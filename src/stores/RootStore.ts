import UiStore from './UiStore';
import FilmsStore from './FilmsStore';

class RootStore {
  uiStore;

  filmsStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.uiStore.init();
    this.filmsStore = new FilmsStore(this);
  }
}

export default RootStore;
