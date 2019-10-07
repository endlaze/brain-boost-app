import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'signup', loadChildren: () => import('./pages/sign-up/sign-up.module').then(r => r.SignUpPageModule) },
  { path: 'reminders', loadChildren: './pages/reminders/reminders.module#RemindersPageModule' },
  { path: 'reminders-config', loadChildren: './pages/reminders-config/reminders-config.module#RemindersConfigPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
