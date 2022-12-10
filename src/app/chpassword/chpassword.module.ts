import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChpasswordPageRoutingModule } from './chpassword-routing.module';

import { ChpasswordPage } from './chpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChpasswordPageRoutingModule
  ],
  declarations: [ChpasswordPage]
})
export class ChpasswordPageModule {}
