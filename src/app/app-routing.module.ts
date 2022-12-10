import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'update-student/:id',
    loadChildren: () =>
      import('./update-student/update-student.module').then(
        (m) => m.UpdateStudentPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'reward',
    loadChildren: () =>
      import('./reward/reward.module').then((m) => m.RewardPageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'drinkbuy',
    loadChildren: () =>
      import('./drinkbuy/drinkbuy.module').then((m) => m.DrinkbuyPageModule),
  },
  {
    path: 'drink',
    loadChildren: () =>
      import('./pages/drink/drink.module').then((m) => m.DrinkPageModule),
  },
  {
    path: 'redeem',
    loadChildren: () =>
      import('./pages/redeem/redeem.module').then((m) => m.RedeemPageModule),
  },
  {
    path: 'taps/profile/:id',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'orderbuy',
    loadChildren: () =>
      import('./orderbuy/orderbuy.module').then((m) => m.OrderbuyPageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./taps/taps.module').then((m) => m.TapsPageModule),
  },
  {
    path: 'drink2/:typs_id',
    loadChildren: () =>
      import('./drink2/drink2.module').then((m) => m.Drink2PageModule),
  },
  {
    path: 'redeem2/:rew_id',
    loadChildren: () =>
      import('./redeem2/redeem2.module').then((m) => m.Redeem2PageModule),
  },
  {
    path: 'redeem3/:cus_id',
    loadChildren: () =>
      import('./redeem2/redeem2.module').then((m) => m.Redeem2PageModule),
  },
  {
    path: 'edit-customers/:cus_id',
    loadChildren: () =>
      import('./edit-customers/edit-customers.module').then(
        (m) => m.EditCustomersPageModule
      ),
  },
  {
    path: 'forgotpassword',
    loadChildren: () =>
      import('./forgotpassword/forgotpassword.module').then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: 'change-password',
    loadChildren: () =>
      import('./change-password/change-password.module').then(
        (m) => m.ChangePasswordPageModule
      ),
  },
  {
    path: 'chpassword',
    loadChildren: () =>
      import('./chpassword/chpassword.module').then(
        (m) => m.ChpasswordPageModule
      ),
  },
  {
    path: 'show-reward/:cus_id',
    loadChildren: () =>
      import('./show-reward/show-reward.module').then(
        (m) => m.ShowRewardPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
