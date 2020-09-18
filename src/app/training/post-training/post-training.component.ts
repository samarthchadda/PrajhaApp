import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-post-training',
  templateUrl: './post-training.component.html',
  styleUrls: ['./post-training.component.css']
})
export class PostTrainingComponent implements OnInit {


  constructor(private trainingService:TrainingService) { }

  days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  //creating JS object for training
  courseData = {
    trainingID:null,
    name:'',   
    description:'',
    method:'',
    fees:null,
    facultyName:'',
    schedule:{
      sessionName:'',
      totalSessions:null,
      weeklySessions:null,
      availDay:[],
      timings:''       
    }
    
  }
  

  ngOnInit(): void {
   
 
  }
 
  onChange(checkBox:any)
  { 
    this.courseData.schedule.availDay.push(checkBox.value);
  }
 
  onSubmit(form:NgForm)
  {
    
    this.courseData.name = form.value.CourseTitle;   
    this.courseData.description = form.value.Description;
    this.courseData.method = form.value.Method;
    this.courseData.fees = form.value.Fees;
    this.courseData.facultyName = form.value.Faculty;
    this.courseData.schedule.sessionName = form.value.SessionName;
    this.courseData.schedule.totalSessions = form.value.totalSessions;
    this.courseData.schedule.weeklySessions = form.value.weeklySessions;
    this.courseData.schedule.timings = form.value.srtTime.toString() + "-"+form.value.endTime.toString();
  
    console.log(this.courseData);



  }

}
