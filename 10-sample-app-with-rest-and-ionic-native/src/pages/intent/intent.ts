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

@Component({
  selector: 'intent',
  templateUrl: 'intent.html'
})
export class Intent {
  selectedItem: any;
  value: any;

  @ViewChild('map1') mapElement1: ElementRef;
  map1: GoogleMap;

  //   @ViewChild('map') mapElement: ElementRef;
  //  map: any;

  ionViewDidLoad() {
    // this.loadMap();
    this.loadMap1();
  }

  // ngAfterViewInit(){
  //   // this.loadMap1();
  //   this.platform.ready().then(() => {
  //     this.initMap();
  //   });
  // }

  initMap() {

    var title1;
    var latlng;

      latlng = this.selectedItem.latlng; 
      title1 = this.selectedItem.name;

    let map: GoogleMap = this._googleMaps.create('map1');
    
    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

      // let coordinates: LatLng = new LatLng(latlng[1],LatLng[0]);

      let position = {
        target: {
          lat: this.selectedItem.latlng[0],
          lng:this.selectedItem.latlng[1]
        },
        zoom: 5
      };

      map.animateCamera(position);

      let markerOptions: MarkerOptions = {
        // position: coordinates,
        position:{
          lat: this.selectedItem.latlng[0],
          lng:this.selectedItem.latlng[1]
        },
        icon: "assets/images/icons8-Marker-64.png",
        title: title1
      };

      const marker = map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
      });
    })
  }


  constructor(public navParams: NavParams, public platform: Platform, private _googleMaps: GoogleMaps) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('c');
    this.value = this.format(this.selectedItem.population);
    this.platform.ready().then(() => {
      //  this.map = this.loadMap();
      this.loadMap1();
      setInterval(() => { 
        this.initMap(); // Now the "this" still references the component
     }, 2000);
      //Platform ready. All plugins enabled.
    });
  }

  format(value){ //take the number and format it and placed a Unit sign in front of it
    // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e+9
        
            ? Math.abs(Number(value)) / 1.0e+9 + " B"
            
            // Six Zeroes for Millions 
            : Math.abs(Number(value)) >= 1.0e+6
        
            ? Math.abs(Number(value)) / 1.0e+6 + " M"
            // Three Zeroes for Thousands
            : Math.abs(Number(value)) >= 1.0e+3
        
            ? Math.abs(Number(value)) / 1.0e+3 + " K"
        
            : Math.abs(Number(value));
        }

  // loadMap() {
  //   let latLng;
  //   latLng = new google.maps.LatLng(this.selectedItem.latlng[0], this.selectedItem.latlng[1]); 
  //   // latLng = new google.maps.LatLng(33, 65);
  //   let mapOptions = {
  //     center: latLng,
  //     zoom: 5,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }

  //    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // var latlng = new google.maps.LatLng(39.305, -76.617);
    // this.map = new google.maps.Map(document.getElementById('map'), {
    //   center: latlng,
    //   zoom: 12
    // });


  // }

  loadMap1(){
    var title1;
    var latlng;

      title1 = this.selectedItem.name;
    this.map1 = GoogleMaps.create('map1', {
      camera: {
        target: {
          lat: this.selectedItem.latlng[0],
          lng:this.selectedItem.latlng[1]
        },
        zoom: 5,
        tilt: 30
      }
    });
  }

}