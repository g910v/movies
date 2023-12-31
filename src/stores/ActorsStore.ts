/* eslint @typescript-eslint/naming-convention: 0 */

import { makeAutoObservable } from 'mobx';
import type RootStore from './RootStore';
import api from '../shared/api';
import { UnoffActorsGetResponse } from '../shared/api/kinopoiskUnofficial/api-methods';

type TActor = Omit<UnoffActorsGetResponse['items'][number], 'sex'>;

export interface IActor extends TActor {
  sex: string,
}

class ActorsStore {
  actorList: IActor[] = [];

  actorsLoading = false;

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
  }

  public resetActorList() {
    this.setActorList([]);
  }

  public searchActors(value: string) {
    this.fetchActors(value);
  }

  private async fetchActors(value: string) {
    this.setActorsLoading(true);
    this.actorList = [];
    try {
      const { data: { items } } = await api.kinoUnoff.actors.get({
        name: value,
      });
      const newData = items.map(f => ({
        ...f,
        sex: f.sex === 'MALE' ? 'Мужской' : f.sex === 'FEMALE' ? 'Женский' : 'Информация отсутсвует',
      }));
      this.setActorList(newData);
    } catch (error) {
      console.log(error);
    }
    this.setActorsLoading(false);
  }

  private setActorList(newData: IActor[]): void {
    this.actorList = newData;
  }

  private setActorsLoading(loading: boolean): void {
    this.actorsLoading = loading;
  }
}

export default ActorsStore;
