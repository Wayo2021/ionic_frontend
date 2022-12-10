import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChpasswordPage } from './chpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ChpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChpasswordPageRoutingModule {}
