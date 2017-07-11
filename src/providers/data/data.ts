import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  saveRoles(roles) {
    let newRoles = JSON.stringify(roles);
    this.storage.set('roles', newRoles);
  }

  getRoles() {
    return this.storage.get('roles');
  }

  saveGoals(goals) {
    let newGoals = JSON.stringify(goals);
    this.storage.set('goals', newGoals);
  }

  getGoals() {
    return this.storage.get('goals');
  }

}
