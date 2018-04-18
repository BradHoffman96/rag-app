import { Component, ViewChild, ElementRef } from '@angular/core';

import { PopoverController, NavParams } from 'ionic-angular';


@Component({
  template: `
    <ion-list radio-group class="popover-page">
      <ion-item>
        <ion-label>Priority</ion-label>
        <ion-radio value="priority"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Due Date</ion-label>
        <ion-radio value="due-date"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Largest Size</ion-label>
        <ion-radio value="largest-size"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Smallest Size</ion-label>
        <ion-radio value="smallest-size"></ion-radio>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
  }
}