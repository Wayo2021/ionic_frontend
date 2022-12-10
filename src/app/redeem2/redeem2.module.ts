import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Redeem2PageRoutingModule } from './redeem2-routing.module';

import { Redeem2Page } from './redeem2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Redeem2PageRoutingModule
  ],
  declarations: [Redeem2Page]
})
export class Redeem2PageModule {}
