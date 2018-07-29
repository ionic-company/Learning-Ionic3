import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { Intent } from '../pages/intent/intent';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OAuthService } from 'angular-oauth2-oidc';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { HttpModule } from '@angular/http';

import { GoogleMaps } from '@ionic-native/google-maps';
import { AuthPage } from '../pages/auth/auth';
import { EmailValidatorDirective } from '../directives/email-validator/email-validator';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { EmailComponent } from '../components/email/email';
import { RestProvider } from '../providers/rest/rest';
import { Countries } from '../pages/countries/countries';
import { CameraPage } from '../pages/camera/camera';

import { GeolocationPage } from '../pages/geolocation/geolocation';

import { BrightnessPage } from '../pages/brightness/brightness';
import { Brightness } from '@ionic-native/brightness';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import {CallNumber} from '@ionic-native/call-number';
import { CallnumberPage } from '../pages/callnumber/callnumber';
import { VibrationPage } from '../pages/vibration/vibration';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Login,
    Register,
    AuthPage,
    EmailValidatorDirective,
    ProgressBarComponent,
    EmailComponent,
    Countries,
    Intent,
    CameraPage,
   GeolocationPage,
   BrightnessPage,
   CallnumberPage,
   VibrationPage
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Login,
    Register,
    AuthPage,
    Countries,
    Intent,
    CameraPage,
   GeolocationPage,
   BrightnessPage,
   CallnumberPage,
   VibrationPage
    ],
  providers: [
    OAuthService,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Camera,
    Brightness,
    Geolocation,
    CallNumber,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider ]

})
export class AppModule {}
