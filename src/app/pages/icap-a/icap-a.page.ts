import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-icap-a',
  templateUrl: './icap-a.page.html',
  styleUrls: ['./icap-a.page.scss'],
})
export class ICAPAPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent;

  scrollToTop() {
    this.content.scrollToTop(1500);
  }

  constructor() { }

  ngOnInit() {
  }

}
