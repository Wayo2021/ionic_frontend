import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TapsPage } from './taps.page';

const routes: Routes = [
  {
    path: 'taps',
    component: TapsPage,
    children: [
      {
        path: 'drink',
        loadChildren: () =>
          import('../pages/drink/drink.module').then((m) => m.DrinkPageModule),
      },
      {
        path: 'redeem',
        loadChildren: () =>
          import('../pages/redeem/redeem.module').then(
            (m) => m.RedeemPageModule
          ),
      },
      {
        path: 'redeem1/:cus_id',
        loadChildren: () =>
          import('../pages/redeem/redeem.module').then(
            (m) => m.RedeemPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'profiles/:cus_id',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/taps/drink',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/taps/drink',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TapsPageRoutingModule {}
