import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'drink',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/drink/drink.module').then(
                (m) => m.DrinkPageModule
              ),
          },
        ],
      },
      {
        path: 'redeem',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/redeem/redeem.module').then(
                (m) => m.RedeemPageModule
              ),
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/profile/profile.module').then(
                (m) => m.ProfilePageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'drink',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'drink',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
