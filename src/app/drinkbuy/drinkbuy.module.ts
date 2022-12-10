import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkbuyPageRoutingModule } from './drinkbuy-routing.module';

import { DrinkbuyPage } from './drinkbuy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkbuyPageRoutingModule
  ],
  declarations: [DrinkbuyPage]
})
export class DrinkbuyPageModule {}
