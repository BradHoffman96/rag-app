import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { User } from '../../shared/models/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  user = {} as User;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
      }
    })
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(result => {
        console.log(result);
        this.navCtrl.setRoot(LoginPage);
      })
      .catch(e => {
        console.log(e);
      });
  }  
}
