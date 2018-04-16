import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import 'rxjs/add/operator/map';
import { Goal } from "../../shared/models/goal";
import { Role } from "../../shared/models/role";
import { Observable } from 'rxjs/observable';
import { User } from '../../shared/models/user';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class DataProvider {

  roles: Observable<any[]>;
  rolesList: AngularFireList<any>;
  goals: Observable<any[]>;
  goalsList: AngularFireList<any>;
  user: Observable<any[]>;
  userDetails: AngularFireList<any>;
  userId: string;

  constructor(public storage: Storage, private afAuth: AngularFireAuth, public afDb: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    })


    //this.storage.clear();
  }

  saveRole(role: Role) {
    const ref = this.rolesList.push({});
    role.id = ref.key;
    ref.set(role);
  }

  getRoles() {
    if (!this.userId) return;
    this.rolesList = this.afDb.list(`/roles/${this.userId}`);
    this.roles = this.rolesList.valueChanges();

    return this.roles;
  }
  
  deleteRole(role: Role) {
    this.rolesList.remove(role.id);
  }

  saveGoal(goal) {
    const ref = this.goalsList.push({});
    goal.id = ref.key;
    ref.set(goal);
  }

  getGoals() {
    if (!this.userId) return;
    this.goalsList = this.afDb.list(`/goals/${this.userId}`);
    this.goals = this.goalsList.valueChanges();

    return this.goals;
  }

  deleteGoal(goal: Goal) {
    this.goalsList.remove(goal.id);
  }

  addUser(user: User) {
    if (!this.userId) {
      console.log("User is not logged in");
    }
    this.userDetails = this.afDb.list(`/users/${this.userId}`);
    this.user = this.userDetails.valueChanges();
    this.userDetails.push(user.name);
  }

  getUser(user: User) {
    if (!this.userId) return;
    this.userDetails = this.afDb.list(`/users/${this.userId}`);
    this.user = this.userDetails.valueChanges();

    return this.user;
  }

}
