import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallnumberPage } from './callnumber';

@NgModule({
  declarations: [
    CallnumberPage,
  ],
  imports: [
    IonicPageModule.forChild(CallnumberPage),
  ],
})
export class CallnumberPageModule {}
