import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderbuyPage } from './orderbuy.page';

const routes: Routes = [
  {
    path: '',
    component: OrderbuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderbuyPageRoutingModule {}
