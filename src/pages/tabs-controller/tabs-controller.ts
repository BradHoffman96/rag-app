import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RolesPage } from '../roles/roles';
import { GoalsPage } from '../goals/goals';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RolesPage;
  tab2Root: any = GoalsPage;
  tab3Root: any = ProfilePage;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private navParams: NavParams) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        user.updateProfile({
          displayName: navParams.get('name'),
          photoURL: ""
        })
      }
    })
  }
  
}
