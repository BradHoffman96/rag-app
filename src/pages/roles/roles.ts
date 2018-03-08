import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {AddRolePage} from "../add-role/add-role";
import {DataProvider} from "../../providers/data/data";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Role } from '../../shared/models/role';

@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html'
})
export class RolesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  roles: Observable<any[]>;

  constructor(public modalCtrl: ModalController, public dataService: DataProvider, private afAuth: AngularFireAuth, private afDb: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.roles = this.dataService.getRoles();
        this.roles.forEach(role => {
          console.log(role);
        })
      }
    })
  }

  addRole() {
    let addRoleModal = this.modalCtrl.create(AddRolePage); 

    addRoleModal.onDidDismiss((role) => {
      if (role.title && role.priority) {
        this.dataService.saveRole(role);
        this.dataService.getRoles();
      }
    });

    addRoleModal.present()
  }

  viewRole(role) {
    //Implement
  }

  deleteRole(role) {
    console.log(role);
    this.dataService.deleteRole(role);
    // let index = this.roles.indexOf(role);

    // this.roles.splice(index, 1);
    // this.dataService.saveRoles(this.roles);
  }

}
