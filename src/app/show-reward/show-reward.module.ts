import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRewardPageRoutingModule } from './show-reward-routing.module';

import { ShowRewardPage } from './show-reward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRewardPageRoutingModule
  ],
  declarations: [ShowRewardPage]
})
export class ShowRewardPageModule {}
