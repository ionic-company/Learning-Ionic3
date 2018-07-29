import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { Intent } from '../intent/intent';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'countries',
  templateUrl: 'countries.html'
})
export class Countries {

  countries: any;
  errorMessage: string;
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;
  text= new Array<JSON>();
  objs: any;
  results= new Array<JSON>();

  constructor(public navCtrl: NavController, public rest: RestProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.getCountries();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
      this.searching = false;
      this.setFilteredItems();

  });
  }

  getCountries() {
    this.objs = localStorage.getItem("testJSON");
    if(this.objs == null){
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
       }
       else{
         if(localStorage.getItem("lock") == '1'){
          this.countries = JSON.parse(localStorage.getItem("testJSON"));
         }
         else{
             this.text = JSON.parse(localStorage.getItem("testJSON"));
             for(var j=0; j<10 ;j++){ 
             for (var i=0 ; i < this.text.length ; i++)
             {
                 this.results.push(this.text[i]);
             }
            }
             this.objs = JSON.stringify(this.results);
             localStorage.setItem("testJSON", this.objs);
             localStorage.setItem("lock",'1');
             this.countries = this.results;
         }
       }
  }

  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems() {
    this.countries = this.rest.filterItems(this.searchTerm);
  }

  itemTapped(c) {
    this.navCtrl.push(Intent, {
    c: c
  });
  }
}