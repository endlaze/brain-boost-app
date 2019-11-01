import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationEvents,
  BackgroundGeolocationResponse,
} from '@ionic-native/background-geolocation/ngx';

import {
  BackgroundGeolocationProvider,
  BackgroundGeolocationAccuracy
} from '@ionic-native/background-geolocation/ngx';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  watch: any;
  map: GoogleMap;
  lat = 0.0;
  long = 0.0;

  constructor(private platform: Platform, private afAuth: AngularFireAuth, private backgroundGeolocation: BackgroundGeolocation) {
    this.annonLogin();
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
    this.setUpGeolocation();
  }

  annonLogin = () => {
    this.afAuth.auth.signInAnonymously().then(user => {
      alert(JSON.stringify(user.user));
    })
  }

  setUpGeolocation = () => {
    const config: BackgroundGeolocationConfig = {
      locationProvider: 0,
      desiredAccuracy: 0,
      stationaryRadius: 1,
      distanceFilter: 2,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: true, // enable this to clear background location settings when the app terminates
      interval: 2000,
      fastestInterval: 5000,
      activitiesInterval: 1000,
    };
    this.backgroundGeolocation.configure(config)
      .then(() => {

        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
          this.lat = location.latitude;
          this.long = location.longitude;
          this.onPositionChange();
          this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });

      });
    // start recording location
    this.backgroundGeolocation.start();
  }


  onPositionChange = () => {
    this.map.clear().then(() => {
      this.map.moveCamera({
        target: { lat: this.lat, lng: this.long },
        zoom: 17,
        tilt: 60,
      }).then(() => {
        let marker: Marker = this.map.addMarkerSync({
          title: 'Posicion actual',
          icon: 'blue',
          position: {
            lat: this.lat,
            lng: this.long
          }
        });
      });
    })
  }

  loadMap = () => {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDzlKHFZ1WgHylJ8A2uCc1aEXDLZDLUYq8',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDzlKHFZ1WgHylJ8A2uCc1aEXDLZDLUYq8'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.lat,
          lng: this.long,
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

  }
}
