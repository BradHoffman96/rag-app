import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {AddRolePage} from "../add-role/add-role";
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html'
})
export class RolesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  public roles = [];

  constructor(public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getRoles().then((roles) => {
      if (roles) {
        this.roles = JSON.parse(roles);
      }
    });
  }

  addRole() {
    let addRoleModal = this.modalCtrl.create(AddRolePage, { userId: 8675309 });

    addRoleModal.onDidDismiss((item) => {
      if (item) {
        console.log(item);
        this.roles.push(item);
        this.dataService.saveRoles(this.roles);
      }
    });

    addRoleModal.present();
  }

  viewRole(role) {
    //Implement
  }

  deleteRole(role) {
    let index = this.roles.indexOf(role);

    this.roles.splice(index, 1);
    this.dataService.saveRoles(this.roles);
  }

}
