import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html'
})
export class AddGoalPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  title;
  priority;
  selectedRole;
  selectedPriority;
  selectedDueDate;
  public roles = [];
  public priorities = ['High', 'Med', 'Low'];

  constructor(public navCtrl: NavController, public view: ViewController, public dataService: DataProvider) {
    // this.dataService.getRoles().then((roles) => {
    //   if (roles) {
    //     this.roles = JSON.parse(roles);
    //   }
    // });
  }

  addGoal() {
    let newItem = {
      title: this.title,
      role: this.selectedRole,
      dueDate: this.selectedDueDate,
      priority: parseInt(this.selectedPriority, 10)
    }

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
