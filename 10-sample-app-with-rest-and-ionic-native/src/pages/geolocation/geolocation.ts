import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';



@Component({

 selector: 'page-geolocation',

 templateUrl: 'geolocation.html'

})

export class GeolocationPage {

 

 latitude: any;

 longitude: any;

 constructor(private platform: Platform, private geolocation: Geolocation) {

  platform.ready().then(() => {

    // get current position
    geolocation.getCurrentPosition().then(pos => {
      alert('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    const watch = geolocation.watchPosition().subscribe(pos => {
      alert('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    // to stop watching
    watch.unsubscribe();

  });

}



 

}