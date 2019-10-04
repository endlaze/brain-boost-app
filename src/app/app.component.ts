import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Recordatorios',
      url:'/reminders',
      icon: 'ios-calendar'
    },
    {
      title: 'Aplicaciones',
      url:'/apps',
      icon: 'ios-apps'
    },
    {
      title: 'Juegos',
      url:'/games',
      icon: 'logo-game-controller-b'
    },
    {
      title: 'Estadísticas',
      url:'/stats',
      icon: 'stats'
    },
    {
      title: 'Notas Médicas',
      url:'/medical_notes',
      icon: 'create'
    },
    {
      title: 'Información',
      url:'/information',
      icon: 'information-circle-outline'

    },
    {
      title: 'Ajustes',
      url:'/settings',
      icon: 'cog'
    },
    {
      title: 'Cerrar Sesión',
      url:'/exit',
      icon: 'exit'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
