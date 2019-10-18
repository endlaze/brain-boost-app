import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HomePage } from './home.page';
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component'
import { MapComponent } from '../../components/map/map.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [
    Geolocation
  ],
  declarations: [HomePage, SidemenuComponent, MapComponent]
})
export class HomePageModule { }
