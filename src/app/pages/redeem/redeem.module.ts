import { filter } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemPageRoutingModule } from './redeem-routing.module';

import { RedeemPage } from './redeem.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [RedeemPage],
})
export class RedeemPageModule {}
