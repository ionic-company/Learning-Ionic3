import { NgModule } 					from "@angular/core";
import { BrowserModule } 				from "@angular/platform-browser";
import { IonicApp, IonicModule } 		from "ionic-angular";

import { ErrorHandler  } 				from "@angular/core";
import { IonicErrorHandler } 			from "ionic-angular";

import { SplashScreen }					from "@ionic-native/splash-screen";
import { StatusBar }					from "@ionic-native/status-bar";

import { MainApp }						from "./app.component";

import { HttpClientModule }				from "@angular/common/http";
import { ApiProvider }					from '../providers/api/api';

@NgModule({
	declarations: [MainApp],
	imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MainApp)],
	bootstrap: [IonicApp],
	entryComponents: [MainApp],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider
	]
})
export class AppModule {}
