import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';



import {CallNumber} from '@ionic-native/call-number';



@Component({

 selector: 'page-callnumber',

 templateUrl: 'callnumber.html'

})

export class CallnumberPage {



 constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {}



 ionViewDidLoad() {

   //alert('ionViewDidLoad CallnumberPage');

 }

 

 Call() {

  this.callNumber.callNumber("18001010101", true)
  .then(res => alert(res))
  .catch(err => alert(err));

}

}