import {Component, OnInit} from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crypto-js-angular-demo';
  object = {
    name: 'Elvin Shrestha',
    age: 20,
  };
  encrypted;
  decrypted;

  ngOnInit(): void {
    this.encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.object), this.title, null).toString();
    this.decrypted = JSON.parse(CryptoJS.AES.decrypt(this.encrypted, this.title, null).toString(CryptoJS.enc.Utf8));
  }
}
