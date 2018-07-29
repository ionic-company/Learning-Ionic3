import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  items: any;
  text: any;
  objs= new Array<JSON>();
  results= new Array<JSON>();

  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  //private apiUrl = 'http://localhost:8732/Service1/data/11';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
   
    
  }

  getCountries(): Observable<string[]> {
    return this.http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  filterItems(searchTerm){
 
    
    this.text = localStorage.getItem("testJSON");
    this.objs = JSON.parse(this.text); 
    // for (var i=0 ; i < this.obj.length ; i++)
    // {
    // //if (this. == searchTerm) {
    //   this.obj.filter();
    //     this.results.push(this.obj[i]);
    // //}
    // }
    return this.objs.filter((obj) => {
      return obj["name"].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
    //return this.results;
  }
  
  private extractData(res: Response) {
    let body = res;
    this.items= res;
    this.items = JSON.stringify(res);
    localStorage.setItem("testJSON", this.items);
    return body || { };
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
