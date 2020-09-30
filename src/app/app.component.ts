import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  allowRevenue:boolean;
  allowNews:boolean;
  allowAppoint:boolean;
  allowSubAdmin:boolean;
  

  login = false;
  constructor(private authService:AuthService,private routerBtn:Router)
  {}

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  adminUser:boolean=false;
  ngOnInit()
  { 
    
      this.authService.userLoggedIn.subscribe(res=>{
       this.login = res;

       this.authService.adminMode.subscribe(res=>{
         console.log("Admin mode : ", res);

         if(res)
         {
  
          this.adminUser = true;
          console.log("Admin modeee");
          this.allowCourses = true;
          this.allowTraining = true;
          this.allowRevenue = true;
          this.allowFaculties = true;
          this.allowAppoint = true;
          this.allowNews = true;
          this.allowSubAdmin = true;
          
            
  
         }
         else{
        
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
              if(per=="Coaches Scheduling"){
                this.allowFaculties = true;
              }
              if(per=="Revenues"){
                this.allowRevenue = true;
              }
              if(per=="Admins"){
                this.allowSubAdmin = true;
              }
              if(per=="News"){
                this.allowNews = true;
              }
              if(per=="Appointments"){
                this.allowAppoint = true;
              }
              
          })
  
          })
        }


       })     
     

      })
      

  }

  logoutAdmin()
  {
      this.authService.logout();
      this.authService.userPermissions.next([]);
      localStorage.setItem('userType',null);
      window.location.reload();
      
  }

  onTraining()
  {
    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="Trainings"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/training']);  
    }
  }

  onCourse()
  {
    console.log(JSON.parse(localStorage.getItem('permissions')));
   
    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="Courses"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/course']);  
    }
  }

  onFacultyLive()
  {
    
    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="Coaches Scheduling"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/faculties']);  
    }
  }


  onFacultyAppoint()
  {
    
    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="Coaches Scheduling"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/appoint-faculties']);  
    }
  }


  onRevenue()
  {
    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="Revenues"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/revenue']);  
    }
  }

  onSubAdmin()
  {
    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="Admins"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/admin']);  
    }

  }

  onNews()
  { 

    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="News"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/news']);  
    }

  }

  onAppoint()
  {
    let allow = false;
    let permissions = JSON.parse(localStorage.getItem('permissions'));
   
    permissions.forEach(per=>{
      if(per=="Appointments"){
        allow = true;
      }
      if(per=="Admin"){
        allow = true;
      }
    })   

    if(!allow)
    {
      window.alert("Permission Denied");
     
    }
    else{
      this.routerBtn.navigate(['/appointments']);  
    }

  }


}
