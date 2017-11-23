import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { environment } from '@app/env';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public env: string;

  constructor(public navCtrl: NavController) {
    this.env = environment.env;
  }

}
