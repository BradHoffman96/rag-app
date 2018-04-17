import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {AddRolePage} from "../add-role/add-role";
import {DataProvider} from "../../providers/data/data";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Role } from '../../shared/models/role';
import { Goal } from '../../shared/models/goal';
import { AddGoalPage } from '../add-goal/add-goal';

@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html'
})
export class RolesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  roles: Observable<any[]>;
  goals: Observable<any[]>;

  constructor(public modalCtrl: ModalController, public dataService: DataProvider, private afAuth: AngularFireAuth, private afDb: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.roles = this.dataService.getRoles();
      }
    })
  }

  addRole() {
    let addRoleModal = this.modalCtrl.create(AddRolePage); 

    addRoleModal.onDidDismiss((role) => {
      if (role) {
        this.dataService.createRole(role);
      }
    });

    addRoleModal.present();
  }

  editRole(role: Role) {
    let addRoleModal = this.modalCtrl.create(AddRolePage, {role: role}); 

    addRoleModal.onDidDismiss((role) => {
      if (role) {
        this.dataService.updateRole(role);
      }
    });

    addRoleModal.present();
  }

  deleteRole(role: Role) {
    console.log(role);
    this.dataService.deleteRole(role);
  }

  addGoal(role: Role) {
    let addGoalModal = this.modalCtrl.create(AddGoalPage);

    addGoalModal.onDidDismiss((goal) => {
      if (goal) {
        goal.roleId = role.id;
        this.dataService.createGoal(goal);
      }
    });

    addGoalModal.present();
  }

  editGoal(role: Role, goal: Goal) {
    let addGoalModal = this.modalCtrl.create(AddGoalPage, {goal: goal});

    addGoalModal.onDidDismiss((goal) => {
      if (goal) {
        this.dataService.updateGoal(role, goal);
      }
    });

    addGoalModal.present();
  }

  deleteGoal(goal: Goal) {
    this.dataService.deleteGoal(goal);
  }
  
  getGoals(role: Role) {
    this.goals = this.dataService.getGoalsforRole(role);
  }

  toggleSection(role) {
    role.open = !role.open;
  }

}
