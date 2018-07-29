import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';



import {Camera, CameraOptions} from '@ionic-native/camera';



@Component({

 selector: 'page-camera',

 templateUrl: 'camera.html'

})

export class CameraPage {
  options:any;

 // jpeg/image data will be stored on base64

 public base64Image: string;

 

 constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {}



 ionViewDidLoad() {

   console.log('ionViewDidLoad CameraPage');

 }



 takePicture(){

  // this.options = {
  //   quality: 100,
  //   sourceType: this.camera.PictureSourceType.CAMERA,
  //   saveToPhotoAlbum: true,
  //   correctOrientation: true,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   mediaType: this.camera.MediaType.VIDEO
  // }
  // this.camera.getPicture(this.options)
  //   .then((imageData)=>{
        
  //   }).then((path) => {

  //   })
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64:
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
}

 }