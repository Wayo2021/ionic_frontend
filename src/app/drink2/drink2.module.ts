import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Drink2PageRoutingModule } from './drink2-routing.module';

import { Drink2Page } from './drink2.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Drink2PageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [Drink2Page],
})
export class Drink2PageModule {}
