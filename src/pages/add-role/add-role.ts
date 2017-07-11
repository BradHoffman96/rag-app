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

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  addRole() {
    let newItem = {
      title: this.title,
      priority: this.title
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
