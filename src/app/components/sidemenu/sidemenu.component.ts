import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../guard/auth-guard'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
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
      url: '/medical-notes',
      icon: 'create'
    },
    {
      title: 'Agregar Notas Médicas',
      url: '/add-medical-notes',
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
    }
  ];

  constructor(private guard: AuthGuard, private router: Router) { }

  ngOnInit() { }

  logout = () => {
    this.guard.logout()
    this.router.navigate(['/login']);
  }
}
