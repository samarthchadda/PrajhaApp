import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'PrajhaApp';

  login = false;
  constructor(private authService:AuthService)
  {}

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  ngOnInit()
  { 
      this.authService.userLoggedIn.subscribe(res=>{
       this.login = res;
      })

  }

  logoutAdmin()
  {
      this.authService.logout();
  }


}
