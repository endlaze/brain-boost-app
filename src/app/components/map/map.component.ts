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
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  watch: any;
  map: GoogleMap;
  lat = 0.0;
  lng = 0.0;
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;
  user:any;
  timestamp:any;

  constructor(
    private platform: Platform,
    private afAuth: AngularFireAuth,
    private backgroundGeolocation: BackgroundGeolocation,
    private afs: AngularFirestore,
    private storage: Storage
    ) {
    this.annonLogin();
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
    this.setUpGeolocation();
  }

  annonLogin = () => {
    this.afAuth.auth.signInAnonymously().then(() => {
      this.storage.get('current-user-id').then((user_id) => {
        this.user = user_id;
        this.locationsCollection = this.afs.collection(
          `locations/${this.user}/track`,
          ref => ref.orderBy('timestamp')
        )
      })
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
          this.timestamp = location.time;
          this.lat = location.latitude;
          this.lng = location.longitude;
          this.onPositionChange();
          this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });

      });
    this.backgroundGeolocation.start();
  }


  onPositionChange = () => {
    this.placeMarker();
    this.postPosition();
  }

  postPosition = () => {
    this.locationsCollection.add(
      {
        lat: this.lat,
        lng: this.lng,
        timestamp: this.timestamp
      }
    );
  }

  placeMarker = () => {
    this.map.clear().then(() => {
      this.map.moveCamera({
        target: { lat: this.lat, lng: this.lng },
        zoom: 17,
        tilt: 60,
      }).then(() => {
        let marker: Marker = this.map.addMarkerSync({
          title: 'Posicion actual',
          icon: 'blue',
          position: {
            lat: this.lat,
            lng: this.lng
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
          lng: this.lng,
        },
        zoom: 18
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

  }
}
