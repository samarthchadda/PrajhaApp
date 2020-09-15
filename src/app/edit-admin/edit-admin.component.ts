import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { SubAdminService } from '../services/sub-admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  permissions = ['Trainings','Courses','Revenues','Faculties Scheduling'];
  id;

  subAdminData ={
    AdminId : null,
    AdminPassword:'',
    Permissions:[]
  };

  subAdminInfo ={
    adminId : null,
    password:'',
    permissions:[]
  };


  constructor(private route:ActivatedRoute,private subAdminService:SubAdminService) { }

  ngOnInit(): void {
    this.route.params.subscribe((newParams:Params)=>{
          this.id = newParams['adminID'];

          this.subAdminService.fetchSingleAdmin(this.id).subscribe(res=>{
            
          this.subAdminData = res["SubAdmin"];
          console.log(this.subAdminData);

          this.subAdminData.Permissions = [];
          
      })
    });

  }

  onChange(checkBox:any)
  { 
    this.subAdminData.Permissions.push(checkBox.value);
  }


  onSubmit(form:NgForm)
  {
    this.subAdminInfo.adminId = JSON.parse(this.id);
    this.subAdminInfo.password = form.value.password;
    this.subAdminInfo.permissions = this.subAdminData.Permissions;

    //saving changes to database
    this.subAdminService.editSubAdmin(this.subAdminInfo).subscribe(result=>{
      console.log(result);
    })


  }

}
