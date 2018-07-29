import { Component, ViewChild } from "@angular/core";
import { Platform, MenuController, Nav } from "ionic-angular";
import { OAuthService } from "angular-oauth2-oidc";
import { ToastController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Register } from "../register/register";
import { NavController, NavParams } from "ionic-angular";

declare const OktaAuth: any;

@Component({
	selector: "login",
	templateUrl: "login.html"
})
export class Login {
	// @ViewChild(Nav) nav: Nav;
	private username: string;
	private password: string;
	loadProgress: number = 10;
	lock: number = 0;
	private isVisible: boolean = false;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public menu: MenuController
	) {
		console.log('Login:constructor');

		menu.swipeEnable(false);
	}

	LoadProgress() {
		console.log('Login:LoadProgress');

		var refreshIntervalId = setInterval(() => {
			if (this.loadProgress < 100) {
				this.loadProgress += 10;
			} else {
				this.lock = 1;
				this.navCtrl.setRoot(HelloIonicPage).then(() => {
					// this.navCtrl.push(HelloIonicPage, {}
					// );
				});
				clearInterval(refreshIntervalId);
			}
		}, 500);
	}

	loginClick(event) {
		if (this.username == "admin" && this.password == "123") {
			this.isVisible = true;
			this.LoadProgress();
		} else {
			let toast = this.toastCtrl.create({
				message: "Id and Password doesnot match.",
				duration: 2000,
				position: "bottom"
			});

			toast.present(toast);
		}
	}

	registerClick(event) {
		this.navCtrl.push(Register, {});
	}
}
