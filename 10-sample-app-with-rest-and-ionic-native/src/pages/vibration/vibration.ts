import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';



import { Vibration } from '@ionic-native/vibration';



@Component({

 selector: 'page-vibration',

 templateUrl: 'vibration.html'

})

export class VibrationPage {



 constructor(public navCtrl: NavController, public navParams: NavParams, private vibrate:Vibration) {}



 ionViewDidLoad() {

   console.log('ionViewDidLoad VibrationPage');

 }



 createVibration() {

// Vibrate for 2 seconds

this.vibrate.vibrate(1000);

// Vibrate 2 seconds
// Pause for 1 second
// Vibrate for 2 seconds
// Patterns work on Android and Windows only
this.vibrate.vibrate([2000,1000,2000]);

// Stop any current vibrations immediately
// Works on Android and Windows only
this.vibrate.vibrate(0);

   }

}