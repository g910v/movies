import UiStore from './UiStore';

class RootStore {
  uiStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.uiStore.init();
  }
}

export default RootStore;
