import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the RegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  async register(user: User) {
      try {
        const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        if (result) {
          this.navCtrl.push(TabsControllerPage, {
            name: user.name
          });
        }
      } catch (e) {
        console.log(e);
      }
    }

}
