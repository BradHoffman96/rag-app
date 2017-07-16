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
  public roles = [];
  public sortedGoals = [];

  constructor(public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getGoals().then((goals) => {
      if (goals) {
        this.goals = JSON.parse(goals);
      }
    });
    this.dataService.getRoles().then((roles) => {
      this.roles = JSON.parse(roles);
    })
  }

  addGoal() {
    let addGoalModal = this.modalCtrl.create(AddGoalPage, { userId: 8675309 });

    addGoalModal.onDidDismiss((item) => {
      console.log(item);
      item.score = this.score(item);

      if (this.goals.length == 0) {
        this.goals.push(item);
      } else {
        for (var i = 0; i < this.goals.length; i++) {
          if (this.goals[i].score > item.score) {
            console.log("item score is less than " + i + " score" );
            if (this.goals.length - 1 == i) {
              this.goals.push(item);
              break;
            }
          } else if (this.goals[i].score < item.score) {
            console.log("item score is greater than " + i + " score");
            if (i == 0) {
              this.goals.splice(0, 0, item);
              break;
            } else {
              this.goals.splice(i, 0, item);
              break;
            }

          }
        }
      }

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

  score(goal) {
    var score = 0;

    for (let role of this.roles) {
      if (goal.role === role.title) {
        score += role.priority;
      }
    }
    console.log("getting goals");
    //
    var today = new Date().getTime();
    var dueDate = new Date(goal.dueDate).getTime();
    console.log(today);
    console.log(dueDate);

    var daysLeft = dueDate - today;
    daysLeft = ((daysLeft/1000)/3600)/24;
    console.log(daysLeft);

    //Take the created date and end date to find the number of days
    //Score based off the percentage of days left

    if (daysLeft >= 10) {
      score += 1;
    } else if (daysLeft <= 5) {
      score += 2;
    } else if (daysLeft <= 3) {
      score += 3;
    }

    score += goal.priority;

    console.log(score);
    return score;
  }
}
