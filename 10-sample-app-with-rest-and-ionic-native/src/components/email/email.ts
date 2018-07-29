import { Component, Input , Output, EventEmitter } from '@angular/core';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EmailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'email',
  templateUrl: 'email.html'
})
export class EmailComponent {
  myColor: string;

  text: string;
  showStyle: boolean;
  @Output()
  emailSend: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  statuschange: EventEmitter<number> = new EventEmitter<number>();
  private email: string;
  private emailC : string;

  constructor(public toastCtrl: ToastController) {
    console.log('Hello EmailComponent Component');
    this.text = 'Hello World';
    this.showStyle = true;
    this.getStyle();
  }

  checkEmail(event){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (!regExp.test(this.email)) {
        let toast = this.toastCtrl.create({
          message: 'invalid Email.',
          duration: 2000,
          position: 'bottom'
      });
  
      toast.present(toast);
        this.emailC='1';
        this.statuschange.emit(1);
        this.emailSend.emit(this.email);
        this.showStyle=false;
        this.getStyle();
      }
      else{
        this.emailC='0';
        this.statuschange.emit(0);
        this.emailSend.emit(this.email);
        this.showStyle=true;
        this.getStyle();
      }
  
  }

  getStyle() {
    if(this.showStyle) {
      return "green";
    } 
    else {
      return "red";
    }
  }

}
