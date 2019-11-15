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
      icon: 'home',
      disabled: false
    },
    {
      title: 'Mi perfil',
      url: '/profile',
      icon: 'person',
      disabled: false
    },
    {
      title: 'Recordatorios',
      url: '/reminders',
      icon: 'ios-calendar',
      disabled: false
    },
    {
      title: 'Aplicaciones',
      url: '/apps',
      icon: 'ios-apps',
      disabled: false
    },
    {
      title: 'Juegos',
      url: '/games',
      icon: 'logo-game-controller-b',
      disabled: true
    },
    {
      title: 'Estadísticas',
      url: '/stats',
      icon: 'stats',
      disabled: true
    },
    {
      title: 'Notas Médicas',
      url: '/medical_notes',
      icon: 'create',
      disabled: true
    },
    {
      title: 'Información',
      url: '/info',
      icon: 'information-circle-outline',
      disabled: true

    },
    {
      title: 'Ajustes',
      url: '/settings',
      icon: 'cog',
      disabled: true
    }
  ];

  constructor(private guard: AuthGuard, private router: Router) { }

  ngOnInit() { }

  logout = () => {
    this.guard.logout()
    this.router.navigate(['/login']);
  }
}
