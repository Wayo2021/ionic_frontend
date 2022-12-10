import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkPageRoutingModule } from './drink-routing.module';

import { DrinkPage } from './drink.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [DrinkPage],
})
export class DrinkPageModule {}
