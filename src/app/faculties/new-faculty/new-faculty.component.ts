import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-new-faculty',
  templateUrl: './new-faculty.component.html',
  styleUrls: ['./new-faculty.component.css']
})
export class NewFacultyComponent implements OnInit {

  facultyData={
    name:'',
    phone:null,
    password:'',
    category:'',
    fee:null
  };

  constructor(private facultyService:FacultyService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {   
    
    this.facultyData.name = form.value.name;
    this.facultyData.phone = form.value.phone;
    this.facultyData.password = form.value.password;
    this.facultyData.category = form.value.category;
    this.facultyData.fee = form.value.fee;
   
  
    this.facultyService.postFaculty(this.facultyData).subscribe(res=>{
          console.log(res);
    },err=>{
      console.log(err);
    });   

  }

}
