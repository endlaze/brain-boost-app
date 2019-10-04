import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Recordatorios',
      url: '/reminders',
      icon: 'ios-calendar'
    },
    {
      title: 'Aplicaciones',
      url: '/apps',
      icon: 'ios-apps'
    },
    {
      title: 'Juegos',
      url: '/games',
      icon: 'logo-game-controller-b'
    },
    {
      title: 'Estadísticas',
      url: '/stats',
      icon: 'stats'
    },
    {
      title: 'Notas Médicas',
      url: '/medical_notes',
      icon: 'create'
    },
    {
      title: 'Información',
      url: '/info',
      icon: 'information-circle-outline'

    },
    {
      title: 'Ajustes',
      url: '/settings',
      icon: 'cog'
    },
    {
      title: 'Cerrar Sesión',
      url: '/exit',
      icon: 'exit'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
