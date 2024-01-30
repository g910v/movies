/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import fetchActorInfo from '../api/fetchActorInfo';
import { TActorInfo } from '../types/actorInfo';
import type RootStore from '../../../app/model/RootStore';

class ActorInfoStore {
  actorInfo: TActorInfo | undefined = undefined;

  actorInfoLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  public getActor(id: string) {
    this.fetchActor(id);
  }

  private async fetchActor(id: string) {
    this.setActorInfoLoading(true);
    this.setActorInfo(undefined);
    try {
      const { data } = await fetchActorInfo(id);
      this.setActorInfo(data);
    } catch (error) {
      console.log(error);
    }
    this.setActorInfoLoading(false);
  }

  private setActorInfo(newData: TActorInfo | undefined): void {
    this.actorInfo = newData;
  }

  private setActorInfoLoading(loading: boolean): void {
    this.actorInfoLoading = loading;
  }
}

export default ActorInfoStore;
