import { Component, AfterViewInit, ViewChild, ElementRef, Renderer, Input } from '@angular/core';
import { Validators, FormBuilder  } from '@angular/forms';
import { Platform, MenuController, Nav, TextInput } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { EmailValidatorDirective } from '../../directives/email-validator/email-validator';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class Register{
    private username: string;
    private email: string;
    private phone: string;
    private password: string;
    private confirmPassword: string;
    private emailC : any;
    private phoneC : string;
    @ViewChild('emailBox') emailBox:TextInput;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public menu: MenuController, private renderer: Renderer) {
  }

  statuschange(emailCh: number) {
    this.emailC = emailCh;
  }

  emailSend(emailT: string) {
    this.email = emailT;
  }

  registerClick(event){
    if (this.username != null && this.email != null && this.phone !=null &&  this.password != null 
      && this.password == this.confirmPassword && this.emailC == '0' && this.phoneC == '0') {
        this.navCtrl.setRoot(HelloIonicPage).then(() =>{
          let toast = this.toastCtrl.create({
            message: 'User Created Successfully!!!',
            duration: 2000,
            position: 'bottom'
        });
    
        toast.present(toast);
       });
    }
    else if(this.username == null || this.email == null || this.phone ==null ||  this.password == null ){
      let toast = this.toastCtrl.create({
        message: 'Please provide all details!!!',
        duration: 2000,
        position: 'bottom'
    });

    toast.present(toast);
    }
    else if(this.password != this.confirmPassword){
      let toast = this.toastCtrl.create({
        message: 'Password doesnot match.',
        duration: 2000,
        position: 'bottom'
    });

    toast.present(toast);
    }
    else if(this.emailC != '0'){
      let toast = this.toastCtrl.create({
        message: 'Email is not valid.',
        duration: 2000,
        position: 'bottom'
    });

    toast.present(toast);
    }
    else if(this.phoneC != '0'){
      let toast = this.toastCtrl.create({
        message: 'Phone Number is not valid.',
        duration: 2000,
        position: 'bottom'
    });

    toast.present(toast);
    }
}

checkPhone(event){
  let regExp = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

    if (!regExp.test(this.phone)) {
      let toast = this.toastCtrl.create({
        message: 'invalid Phone.',
        duration: 2000,
        position: 'bottom'
    });

    toast.present(toast);
      this.phoneC='1';
    }
    else{
      this.phoneC='0';
    }
}

checkPassword(event){

    if (this.confirmPassword != this.password) {
      let toast = this.toastCtrl.create({
        message: 'Password Doesnot Match.',
        duration: 2000,
        position: 'bottom'
    });

    toast.present(toast);
    };
}

}