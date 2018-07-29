import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, icon: string, about: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    this.items.push({title:'Pakistan',icon:'assets/imgs/pakistan.png', about:'Pakistan (Urdu: پاکِستان‬‎), officially the Islamic Republic of Pakistan (Urdu: اِسلامی جمہوریہ پاکِستان‬‎), is a country in South Asia. It is the fifth-most populous country with a population exceeding 209,970,000 people.In area, it is the 33rd-largest country, spanning 881,913 square kilometres (340,509 square miles). Pakistan has a 1,046-kilometre (650-mile) coastline along the Arabian Sea and Gulf of Oman in the south and is bordered by India to the east, Afghanistan to the west, Iran to the southwest, and China in the far northeast. It is separated narrowly from Tajikistan by Afghanistans Wakhan Corridor in the northwest, and also shares a maritime border with Oman.'});
    this.items.push({title:'India',icon:'assets/imgs/india.png',about:'India (IAST: Bhārat), also called the Republic of India (IAST: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area, the second-most populous country (with over 1.2 billion people), and the most populous democracy in the world. It is bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast. It shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the northeast; and Myanmar and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives. Indias Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.'});
    this.items.push({title:'China',icon:'assets/imgs/china.jpg',about:'China, officially the Peoples Republic of China (PRC), is a unitary sovereign state in East Asia and the worlds most populous country, with a population of around 1.404 billion. Covering approximately 9,600,000 square kilometers (3,700,000 sq mi), it is the third- or fourth-largest country by total area, depending on the source consulted. China also has the most neighbor countries in the world. Governed by the Communist Party of China, it exercises jurisdiction over 22 provinces, five autonomous regions, four direct-controlled municipalities (Beijing, Tianjin, Shanghai, and Chongqing), and the special administrative regions of Hong Kong and Macau.'});
    this.items.push({title:'Saudi Arabia',icon:'assets/imgs/saudi_arabia.png',about:'Kingdom of Saudi Arabia (KSA), is a sovereign Arab state in Western Asia constituting the bulk of the Arabian Peninsula. With a land area of approximately 2,150,000 km2 (830,000 sq mi), Saudi Arabia is geographically the fifth-largest state in Asia and second-largest state in the Arab world after Algeria. Saudi Arabia is bordered by Jordan and Iraq to the north, Kuwait to the northeast, Qatar, Bahrain and the United Arab Emirates to the east, Oman to the southeast and Yemen to the south. It is separated from Israel and Egypt by the Gulf of Aqaba. It is the only nation with both a Red Sea coast and a Persian Gulf coast and most of its terrain consists of arid desert and mountains.'});
  }

  itemTapped(event, item,i) {
      this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
