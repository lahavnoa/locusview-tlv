import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locusview-tlv';

  constructor(private db: AngularFireDatabase) {
    const site = this.db.list('site').valueChanges().subscribe(siteValue => {
      console.log(siteValue);
    });
  }
}
