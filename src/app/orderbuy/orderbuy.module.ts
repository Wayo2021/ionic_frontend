import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderbuyPageRoutingModule } from './orderbuy-routing.module';

import { OrderbuyPage } from './orderbuy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderbuyPageRoutingModule
  ],
  declarations: [OrderbuyPage]
})
export class OrderbuyPageModule {}
