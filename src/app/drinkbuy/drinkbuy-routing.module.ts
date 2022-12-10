import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkbuyPage } from './drinkbuy.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkbuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkbuyPageRoutingModule {}
