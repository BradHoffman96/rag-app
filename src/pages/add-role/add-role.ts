import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-role',
  templateUrl: 'add-role.html'
})
export class AddRolePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  title;
  priority;
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

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  addRole() {
    let newItem = {
      title: this.title,
      priority: parseInt(this.selectedPriority, 10)
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
