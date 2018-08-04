import { ApiProvider } from './../../providers/api/api';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
	selector: "page-films",
	templateUrl: "films.html"
})
export class FilmsPage {
	films: Observable<any>;

	constructor(
		public navCtrl: NavController,
		public httpClient: HttpClient,
		public apiProvider: ApiProvider
	) {
		console.log('FilmsPage::contructor');

		this.films = this.apiProvider.getFilms();
	}

	openDetails(film) {
		console.log('FilmsPage::openDetails');
		
		this.navCtrl.push('FilmDetailsPage', { film: film });
	}
}
