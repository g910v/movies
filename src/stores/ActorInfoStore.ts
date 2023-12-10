/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';
import api from '../shared/api';
import { DevActorGetOneResponse } from '../shared/api/kinopoiskDev/api-methods';

export interface IActorInfo extends DevActorGetOneResponse {}

class ActorInfoStore {
  actorInfo: IActorInfo | undefined = undefined;

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
      const { data } = await api.kinoDev.actors.getOne(id);
      this.setActorInfo(data);
    } catch (error) {
      console.log(error);
    }
    this.setActorInfoLoading(false);
  }

  private setActorInfo(newData: IActorInfo | undefined): void {
    this.actorInfo = newData;
  }

  private setActorInfoLoading(loading: boolean): void {
    this.actorInfoLoading = loading;
  }
}

export default ActorInfoStore;
