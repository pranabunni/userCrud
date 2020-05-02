import { Component } from '@angular/core';
import { LoginService } from './global/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userCrud';
  constructor(private service: LoginService) {

  }
  navigate(route) {
   this.service.navigation(route); 
  }
  logOut() {
    this.service.logOut();
  }

  get isLogged() {
    return !!this.service.isLogged();
  }

}
