import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RolesPage } from '../pages/roles/roles';
import { GoalsPage } from '../pages/goals/goals';
import { ProfilePage } from '../pages/profile/profile';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AddGoalPage } from '../pages/add-goal/add-goal';
import { AddRolePage } from '../pages/add-role/add-role';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    RolesPage,
    GoalsPage,
    ProfilePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    AddGoalPage,
    AddRolePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RolesPage,
    GoalsPage,
    ProfilePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    AddGoalPage,
    AddRolePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
