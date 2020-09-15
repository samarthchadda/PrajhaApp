import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAdminMode = true;

  constructor(private authService:AuthService,private routerBtn:Router) { }

  ngOnInit(): void {
  }

  onSwitchMode()
  {
    this.isAdminMode = !this.isAdminMode;
  }

  onSubmit(authForm:NgForm)
  {
    console.log(authForm.value);
    if(this.isAdminMode)
    {
      console.log("Admin Mode");
    }else{
      console.log("Sub-Admin Mode");
      authForm.value.id = +authForm.value.id;
      this.authService.subAdminLogin(authForm.value).subscribe(res=>{
        console.log(res);
        if(res["status"])
        {
          console.log("SubAdmin Stored");
          this.authService.userSub.next(res["SubAdmin"]);
          this.authService.userLoggedIn.next(true);
          localStorage.setItem('userData',JSON.stringify(res["SubAdmin"]));
          this.routerBtn.navigate(['/course']);
        }
      })
    }

  }

}
