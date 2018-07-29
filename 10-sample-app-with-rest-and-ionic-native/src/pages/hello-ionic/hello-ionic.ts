import { Component } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public menu: MenuController) {
    menu.swipeEnable(true);
  }
}
