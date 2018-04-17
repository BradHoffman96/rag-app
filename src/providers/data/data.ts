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
  items: Observable<any[]>;

  constructor(public storage: Storage, private afAuth: AngularFireAuth, public afDb: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    })


    //this.storage.clear();
  }

  createRole(role: Role) {
    const ref = this.rolesList.push({});
    role.id = ref.key;
    ref.set(role);
  }

  getRoles() {
    if (!this.userId) return;
    this.rolesList = this.afDb.list(`${this.userId}/roles`);
    this.roles = this.rolesList.valueChanges();

    return this.roles;
  }

  updateRole(role: Role) {
    role.open = false;
    this.afDb.object(`${this.userId}/roles/${role.id}`).update(role);
  }
  
  deleteRole(role: Role) {
    this.rolesList.remove(role.id);
  }

  createGoal(goal) {
    const ref = this.goalsList.push({});
    goal.id = ref.key;
    ref.set(goal);
  }

  // getGoals() {
  //   if (!this.userId) return;
  //   this.goalsList = this.afDb.list(`${this.userId}/goals`);
  //   this.goals = this.goalsList.valueChanges();

  //   return this.goals;
  // }

  getGoalsforRole(role: Role) {
    if (!this.userId) return;
    this.goalsList = this.afDb.list(`${this.userId}/goals`, ref => ref.orderByChild('roleId').equalTo(role.id));
    this.goals = this.goalsList.valueChanges();

    return this.goals;
  }

  getAllGoals() {
    let goalIds = [];
    this.roles.forEach(list => {
      list.forEach(role => {
        if (role.goals) {
          Object.keys(role.goals).forEach(key => {
            goalIds.push(key)
          })
        }
      })
    });

  }

  updateGoal(role: Role, goal: Goal) {
    this.afDb.object(`${this.userId}/goals/${goal.id}`).update(goal);
  }

  deleteGoal(goal: Goal) {
    this.goalsList.remove(goal.id);
  }

}
