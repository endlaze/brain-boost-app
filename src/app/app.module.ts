import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StockRolesService } from './services/stock-roles/stock-roles.service'
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuard } from './guard/auth-guard'
import { LockerModule } from 'angular-safeguard';
import { GoogleMaps } from '@ionic-native/google-maps/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    LockerModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StockRolesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
