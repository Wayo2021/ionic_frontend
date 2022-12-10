import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Drink2Page } from './drink2.page';

const routes: Routes = [
  {
    path: '',
    component: Drink2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Drink2PageRoutingModule {}
