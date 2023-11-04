import { autorun, makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';

class UiStore {
  pageTitle = 'Премьеры';

  constructor(public rootStore?: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  init(): void {
    autorun(() => {
      const newTitle = `MOVIES | ${this.pageTitle}`;
      document.title = newTitle;
    });
  }

  updateDocumentTitle(newTitle: string): void {
    this.pageTitle = newTitle;
  }
}

export default UiStore;
