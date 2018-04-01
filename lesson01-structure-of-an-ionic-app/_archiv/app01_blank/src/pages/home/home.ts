import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public lesson = "1.2"
	public title = "Home Page"
  public text = "Aps with CSS"

	constructor(public navCtrl: NavController) {

	}
}
