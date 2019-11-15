import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module'

import { IonicModule } from '@ionic/angular';

import { RecommendedAppsPage } from './recommended-apps.page';
import { AddAppComponent } from '../../components/add-app/add-app.component'

const routes: Routes = [
  {
    path: '',
    component: RecommendedAppsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [RecommendedAppsPage, AddAppComponent]
})
export class RecommendedAppsPageModule {}
