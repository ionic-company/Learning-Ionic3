import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public lesson = "1.2"
	public title = "App with Second Page"

	constructor(public navCtrl: NavController) {

	}
}
