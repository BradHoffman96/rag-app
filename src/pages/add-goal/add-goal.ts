import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import { Goal } from '../../shared/models/goal';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html'
})
export class AddGoalPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  goal = {} as Goal;
  roles: Observable<any[]>;

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

  constructor(public navCtrl: NavController, public view: ViewController, public dataService: DataProvider, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.roles = this.dataService.getRoles();
      }
    })
  }

  addGoal() {
    this.goal.priority = parseInt(this.selectedPriority, 10);

    this.view.dismiss(this.goal);
  }

  close() {
    this.view.dismiss();
  }

}
