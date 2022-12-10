import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Redeem2Page } from './redeem2.page';

const routes: Routes = [
  {
    path: '',
    component: Redeem2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Redeem2PageRoutingModule {}
