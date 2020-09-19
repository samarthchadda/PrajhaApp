import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PermissionService } from '../services/permission.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAdminMode = true;

  constructor(private authService:AuthService,private routerBtn:Router,private permService:PermissionService) { }

  ngOnInit(): void {
  }

  onSwitchMode()
  {
    this.isAdminMode = !this.isAdminMode;
  }

  onSubmit(authForm:NgForm)
  {
    console.log(authForm.value);

    let adminInfo = {
      email:'',
      password:''
    };

    if(this.isAdminMode)
    {
      console.log("Admin Mode");
      adminInfo.email = authForm.value.id;
      adminInfo.password = authForm.value.password;
      this.authService.adminLogin(adminInfo).subscribe(res=>{
        console.log(res);
        if(res["status"])
        {
          console.log("Admin Stored");
          this.authService.userSub.next(res["admin"]);
          this.authService.userLoggedIn.next(true);
          localStorage.setItem('userData',JSON.stringify(res["admin"]));
          this.routerBtn.navigate(['/course']);
        }
      })


    }else{
      console.log("Sub-Admin Mode");
      authForm.value.id = +authForm.value.id;
      this.authService.subAdminLogin(authForm.value).subscribe(res=>{
        console.log(res);
        if(res["status"])
        {
          console.log("SubAdmin Stored");
          this.authService.userSub.next(res["SubAdmin"]);
          console.log(res["SubAdmin"].Permissions);
          this.authService.userLoggedIn.next(true);
          localStorage.setItem('userData',JSON.stringify(res["SubAdmin"]));
          localStorage.setItem('permissions',JSON.stringify(res["SubAdmin"].Permissions));
          this.authService.userPermissions.next(res["SubAdmin"].Permissions);
          this.permService.userPermissions.next((res["SubAdmin"].Permissions));
          
          this.routerBtn.navigate(['/']);
         
        }
      })
    }

  }

  resetPassword()
  {
    this.routerBtn.navigate(['/reset-pwd']);
  }


}

