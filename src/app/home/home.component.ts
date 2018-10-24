import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Inject AuthService in order to call logout() of this service from Home.html
  constructor(private authService: AuthService) { }
}
