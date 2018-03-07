import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
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
