import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html'
})
export class AddGoalPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  title;
  priority;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  addGoal() {
    let newItem = {
      title: this.title,
      priority: this.priority
    }

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
