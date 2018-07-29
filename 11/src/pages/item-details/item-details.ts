import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController, NavParams, Platform } from 'ionic-angular';

declare var google;

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  MarkerOptions,
  LatLng,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  // @ViewChild('map') mapElement: ElementRef;
  // map: any;

  @ViewChild('map1') mapElement1: ElementRef;
  map1: GoogleMap;

  ionViewDidLoad() {
    this.loadMap();
    //this.loadMap1();
  }

  ngAfterViewInit(){
    //this.loadMap1();
    this.platform.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {

    var title1;
    var lat1;
    var lng1;

    if (this.selectedItem.title == 'Pakistan') {
      lat1 = 30.3753; 
      lng1 = 69.3451;
      title1 = 'Pakistan';
    } else if (this.selectedItem.title == 'India') {
      lat1 = 20.5937;
      lng1 = 78.9629;
      title1 = 'India';
    } else if (this.selectedItem.title == 'China') {
      lat1 = 39.913818;
      lng1 = 116.363625;
      title1 = 'China';
    } else if (this.selectedItem.title == 'Saudi Arabia') {
      lat1 = 23.8859; 
      lng1 = 45.0792;
      title1 = 'Saudi Arabia';
    }

    let map: GoogleMap = this._googleMaps.create('map1');
    
    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

      let coordinates: LatLng = new LatLng(lat1, lng1);

      let position = {
        target: coordinates,
        zoom: 5
      };

      map.animateCamera(position);

      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: "assets/images/icons8-Marker-64.png",
        title: title1
      };

      const marker = map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
      });
    })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private _googleMaps: GoogleMaps) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.platform.ready().then(() => {
      // this.map = this.loadMap();
      //this.loadMap1();
      this.initMap();
      //Platform ready. All plugins enabled.
    });
  }

  loadMap() {
    let latLng;
    if (this.selectedItem.title == 'Pakistan') {
      latLng = new google.maps.LatLng(30.3753, 69.3451);
    } else if (this.selectedItem.title == 'India') {
      latLng = new google.maps.LatLng(20.5937, 78.9629);
    } else if (this.selectedItem.title == 'China') {
      latLng = new google.maps.LatLng(39.913818, 116.363625);
    } else if (this.selectedItem.title == 'Saudi Arabia') {
      latLng = new google.maps.LatLng(23.8859, 45.0792);
    }
    let mapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    /*var latlng = new google.maps.LatLng(39.305, -76.617);
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 12
    });*/


  }

  loadMap1(){
    var lat1;
    var lng1;
    var title;
    if (this.selectedItem.title == 'Pakistan') {
      lat1 = 30.3753; 
      lng1 = 69.3451;
      title = 'Pakistan';
    } else if (this.selectedItem.title == 'India') {
      lat1 = 20.5937;
      lng1 = 78.9629;
      title = 'India';
    } else if (this.selectedItem.title == 'China') {
      lat1 = 39.913818;
      lng1 = 116.363625;
      title = 'China';
    } else if (this.selectedItem.title == 'Saudi Arabia') {
      lat1 = 23.8859; 
      lng1 = 45.0792;
      title = 'Saudi Arabia';
    }
    this.map1 = GoogleMaps.create('map1', {
      camera: {
        target: {
          lat: lat1,
          lng: lng1
        },
        zoom: 5,
        tilt: 30
      }
    });
  }


}
