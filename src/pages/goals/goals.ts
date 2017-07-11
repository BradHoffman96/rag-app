import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {AddGoalPage} from "../add-goal/add-goal";
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html'
})
export class GoalsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  public goals = [];

  constructor(public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getGoals().then((goals) => {
      if (goals) {
        this.goals = JSON.parse(goals);
      }
    });
  }

  addGoal() {
    let addGoalModal = this.modalCtrl.create(AddGoalPage, { userId: 8675309 });

    addGoalModal.onDidDismiss((item) => {
      this.goals.push(item);
      this.dataService.saveGoals(this.goals);
    });

    addGoalModal.present();
  }

  deleteGoal(goal) {
    let index = this.goals.indexOf(goal);

    if (index >= 0) {
      this.goals.splice(index, 1);
      this.dataService.saveGoals(this.goals);
    }
  }
}
