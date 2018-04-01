import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public lesson = "1.4"
	public title = "Second Page"
	public text = "Aps with CSS"

	constructor(public navCtrl: NavController) {

	}
}
