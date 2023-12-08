import { autorun, makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';

export type TViewMode = 'grid' | 'list';

class UiStore {
  pageTitle = 'Премьеры';

  viewMode = 'list';

  constructor(public rootStore?: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  init(): void {
    this.initViewMode();
    autorun(() => {
      const newTitle = `MOVIES | ${this.pageTitle}`;
      document.title = newTitle;
    });
  }

  public updateDocumentTitle(newTitle: string): void {
    this.pageTitle = newTitle;
  }

  private initViewMode(): void {
    const mode = localStorage.getItem('viewMode');
    if (!mode) {
      return;
    }
    this.viewMode = mode;
  }

  public changeViewMode(mode: TViewMode) {
    this.viewMode = mode;
    localStorage.setItem('viewMode', mode);
  }
}

export default UiStore;
