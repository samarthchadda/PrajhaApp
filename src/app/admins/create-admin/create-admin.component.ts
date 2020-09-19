import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubAdminService } from 'src/app/services/sub-admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  id:number;
  constructor(private subAdminService:SubAdminService) { }

  permissions = ['Trainings','Courses','Revenues','Faculties Scheduling'];

  subAdminData ={
    adminId : null,
    password:'',
    permissions:[]
  };

  ngOnInit(): void {
    this.id = this.subAdminService.id;
    console.log(this.id);    

  }

  adminPerm = [];
  onChange(checkBox:any)
  { 
    // this.subAdminData.permissions.push(checkBox.value);
    this.adminPerm.push(checkBox.value);
  }

  onSubmit(form:NgForm)
  {
    this.subAdminData.adminId = +form.value.adminId;
    this.subAdminData.password = form.value.password;     
  

    //saving only unique value in subAdminData's permission
    for(var i = 0;i<this.adminPerm.length;i++)
    {
      if(this.subAdminData.permissions.indexOf(this.adminPerm[i])===-1)
      {
          this.subAdminData.permissions.push(this.adminPerm[i]);
      }
    }

    console.log(this.subAdminData);


    //saving to database
    this.subAdminService.postSubAdmin(this.subAdminData).subscribe(res=>{
      console.log(res);
    })

  }

}
