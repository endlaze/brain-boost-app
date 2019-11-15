import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'signup', loadChildren: () => import('./pages/sign-up/sign-up.module').then(s => s.SignUpPageModule) },
  //{ path: 'reminders', canActivate: [AuthGuard], loadChildren: () => import('./pages/reminders/reminders.module').then(r => r.RemindersPageModule) },
  { path: 'reminders', loadChildren: () => import('./pages/reminders/reminders.module').then(r => r.RemindersPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(l => l.LoginPageModule) },
  { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('./pages/user-profile/user-profile.module').then(up => up.UserProfilePageModule) },
  { path: 'apps', loadChildren: () => import('./pages/recommended-apps/recommended-apps.module').then(ra => ra.RecommendedAppsPageModule) },
  { path: 'icap-form', loadChildren: './pages/icap-form/icap-form.module#ICAPFormPageModule' },
  { path: 'icap-c', loadChildren: './pages/icap-c/icap-c.module#ICAPCPageModule' },
  { path: 'icap-a', loadChildren: './pages/icap-a/icap-a.module#ICAPAPageModule' },
  { path: 'icap-b', loadChildren: './pages/icap-b/icap-b.module#ICAPBPageModule' },
  { path: 'icap-d', loadChildren: './pages/icap-d/icap-d.module#IcapDPageModule' },
  { path: 'icap-e', loadChildren: './pages/icap-e/icap-e.module#IcapEPageModule' },
  { path: 'icap-f', loadChildren: './pages/icap-f/icap-f.module#IcapFPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
