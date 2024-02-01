/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import fetchActorInfo from '../api/fetchActorInfo';
import { TActorInfo } from '../types/actorInfo';
import type RootStore from '../../../app/model/RootStore';

class ActorInfoStore {
  private _actorInfo: TActorInfo | undefined = undefined;

  private _actorInfoLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  get actorInfo() {
    return this._actorInfo;
  }

  get actorInfoLoading() {
    return this._actorInfoLoading;
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
    this._actorInfo = newData;
  }

  private setActorInfoLoading(loading: boolean): void {
    this._actorInfoLoading = loading;
  }
}

export default ActorInfoStore;
