import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-icap-a-form',
  templateUrl: './icap-a-form.component.html',
  styleUrls: ['./icap-a-form.component.scss'],
})
export class ICAPAFormComponent implements OnInit {

  constructor(private route: Router) {
   }

  ngOnInit() {
  }

  navigateToOtherPage = (ruta) => {
    this.route.navigate([ruta]);
  }

}
