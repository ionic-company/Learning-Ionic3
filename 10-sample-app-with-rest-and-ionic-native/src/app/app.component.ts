import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OAuthService } from 'angular-oauth2-oidc';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Countries } from '../pages/countries/countries';
import { CameraPage } from '../pages/camera/camera';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { BrightnessPage } from '../pages/brightness/brightness';
import { CallnumberPage } from '../pages/callnumber/callnumber';
import { VibrationPage } from '../pages/vibration/vibration';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage = HelloIonicPage;
  rootPage = Login;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HelloIonicPage },
      { title: 'Countries', component: ListPage },
      { title: 'Rest Service', component: Countries },
      { title: 'Camera', component: CameraPage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'Brightness', component: BrightnessPage },
      { title: 'Callnumber', component: CallnumberPage },
	    { title: 'Vibration', component: VibrationPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
