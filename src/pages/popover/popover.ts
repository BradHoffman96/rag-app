import { Component, ViewChild, ElementRef } from '@angular/core';

import { PopoverController, NavParams, ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-list radio-group class="popover-page" [(ngModel)]="sortType">
      <ion-item >
        <ion-label>Priority</ion-label>
        <ion-radio value="priority" (click)="close()"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Due Date</ion-label>
        <ion-radio value="due-date" (click)="close()"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Largest Size</ion-label>
        <ion-radio value="largest-size" (click)="close()"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Smallest Size</ion-label>
        <ion-radio value="smallest-size" (click)="close()"></ion-radio>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {

  sortType: string;

  constructor(private navParams: NavParams, public viewCtrl: ViewController) {

  }

  ngOnInit() {
    this.sortType = this.navParams.get('sortType');
  }

  close() {
    this.viewCtrl.dismiss(this.sortType);
  }
}