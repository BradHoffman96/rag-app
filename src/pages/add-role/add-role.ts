import { Component } from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';
import { Role } from "../../shared/models/role";

@Component({
  selector: 'page-add-role',
  templateUrl: 'add-role.html'
})
export class AddRolePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  selectedPriority;
  public priorities = [{
    key: "Low",
    value: 1
  }, {
    key: "Med",
    value: 2
  }, {
    key: "High",
    value: 3
  }];

  role = {} as Role;

  constructor(public navCtrl: NavController, public view: ViewController, private navParams: NavParams) {
    if(this.navParams.get('role')) {
      this.role = this.navParams.get('role');
    }
  }

  addRole() {
    this.view.dismiss(this.role);
  }

  close() {
    this.view.dismiss();
  }

}
