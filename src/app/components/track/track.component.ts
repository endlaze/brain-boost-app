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
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {watch: any;
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
    private afs: AngularFirestore,
    private storage: Storage
    ) {
    this.annonLogin();
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();

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
