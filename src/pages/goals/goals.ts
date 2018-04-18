import { Component } from '@angular/core';
import {ModalController, PopoverController} from 'ionic-angular';
import {AddGoalPage} from "../add-goal/add-goal";
import {DataProvider} from "../../providers/data/data";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/observable";
import { Goal } from '../../shared/models/goal';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html'
})
export class GoalsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  goals: Observable<any[]>;
  sortType: string;

  constructor(public modalCtrl: ModalController, public dataService: DataProvider, private afAuth: AngularFireAuth, public popoverCtrl: PopoverController) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.goals = this.dataService.getAllGoals();
      }
    })
  }

  openOptions(ev) {
    let popover = this.popoverCtrl.create(PopoverPage, {
      sortType: this.sortType
    });
    
    popover.onDidDismiss((sortType) => {
      if (sortType) {
        this.sortType = sortType;
        
        if (sortType == "priority" || sortType == "size" || sortType == "date") {
          this.goals = this.dataService.getSortedGoals(sortType);
        } else if (sortType == "date") {

        }
      }
    });

    popover.present({
      ev: ev
    });
  }

  score(goal) {
    // var score = 0;

    // for (let role of this.roles) {
    //   if (goal.role === role.title) {
    //     score += role.priority;
    //   }
    // }
    // console.log("getting goals");
    // //
    // var today = new Date().getTime();
    // var dueDate = new Date(goal.dueDate).getTime();
    // console.log(today);
    // console.log(dueDate);

    // var daysLeft = dueDate - today;
    // daysLeft = ((daysLeft/1000)/3600)/24;
    // console.log(daysLeft);

    // //Take the created date and end date to find the number of days
    // //Score based off the percentage of days left

    // if (daysLeft >= 10) {
    //   score += 1;
    // } else if (daysLeft <= 5) {
    //   score += 2;
    // } else if (daysLeft <= 3) {
    //   score += 3;
    // }

    // score += goal.priority;

    // console.log(score);
    // return score;
  }
}
