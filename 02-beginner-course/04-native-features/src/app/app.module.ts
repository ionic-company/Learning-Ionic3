import { NgModule } 					from "@angular/core";
import { BrowserModule } 				from "@angular/platform-browser";
import { IonicApp, IonicModule } 		from "ionic-angular";

import { ErrorHandler } 				from "@angular/core";
import { IonicErrorHandler } 			from "ionic-angular";

import { HttpClientModule } 			from "@angular/common/http";

import { IonicStorageModule }			from '@ionic/storage';

import { SplashScreen } 				from "@ionic-native/splash-screen";
import { StatusBar } 					from "@ionic-native/status-bar";

import { EmailComposer }				from "@ionic-native/email-composer";

import { MainApp } 						from "./app.component";

import { ApiProvider } 					from "../providers/api/api";
import { FavoriteProvider } 			from "../providers/favorite/favorite";

@NgModule({
	declarations: [MainApp],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MainApp),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [MainApp],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ApiProvider,
		EmailComposer,
		FavoriteProvider
	]
})
export class AppModule {}
