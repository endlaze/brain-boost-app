import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-related-accounts',
  templateUrl: './related-accounts.page.html',
  styleUrls: ['./related-accounts.page.scss'],
})
export class RelatedAccountsPage implements OnInit {
  userToTrack:any

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

}
