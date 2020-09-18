import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'PrajhaApp';

  permissions=[];
  allowTraining:boolean;
  allowAdmin:boolean;
  allowCourses:boolean;
  allowFaculties:boolean;
  

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
      
       this.permissions = JSON.parse(localStorage.getItem('permissions'));
      

        this.authService.userPermissions.subscribe(res=>{
          console.log("B S :",res);
          this.permissions = res;
         
          this.permissions.forEach(per=>{
            if(per=="Courses"){
              this.allowCourses = true;
            }
            if(per=="Trainings"){
              this.allowTraining = true;
            }
            if(per=="Faculties Scheduling"){
              this.allowFaculties = true;
            }
            
        })

        })

      
     

      })
      

  }

  logoutAdmin()
  {
      this.authService.logout();
      this.authService.userPermissions.next([]);
      window.location.reload();
      
  }

  onTraining()
  {
    if(!this.allowTraining)
    {
      window.alert("Permission Denied");
     
    }
  }

  onCourse()
  {
    if(!this.allowCourses)
    {
      window.alert("Permission Denied");
     
    }
  }

  onFaculty()
  {
    if(!this.allowFaculties)
    {
      window.alert("Permission Denied");
     
    }
  }


}
