import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { RolesPage } from '../roles/roles';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsControllerPage);
      }
    } catch (e) {
      console.log(e);
    }
  }

  register(user: User) {
    this.navCtrl.push(RegistrationPage);
  }

  // async register(user: User) {
  //   try {
  //     const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  //     if (result) {
  //       this.navCtrl.push(RegistrationPage);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  
}
