import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    private navCtrl: NavController
  ) { }


  logout() {
    this.auth.logOut()
    this.router.navigate(['login'])
  }

  navigateBack() {
    this.navCtrl.back();
  }
}