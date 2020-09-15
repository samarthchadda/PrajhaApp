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
  trainingData = {
    
    title:'',
    category:'',
    description:'',
    method:'',
    fees:null,
    faculty:'',
    schedule:{
      sessionNm:'',
      totalSessions:null,
      weeklySessions:null,
      availDay:[],
      srtTime:'',
      endTime:'',            
    }
    
  }
  

  ngOnInit(): void {
   
 
  }
  
  onChange(checkBox:any)
  { 
    this.trainingData.schedule.availDay.push(checkBox.value);
  }
 
  onSubmit(form:NgForm)
  {
    
    this.trainingData.title = form.value.CourseTitle;
    this.trainingData.category = form.value.Category;
    this.trainingData.description = form.value.Description;
    this.trainingData.method = form.value.Method;
    this.trainingData.fees = form.value.Fees;
    this.trainingData.faculty = form.value.Faculty;
    this.trainingData.schedule.sessionNm = form.value.SessionName;
    this.trainingData.schedule.totalSessions = form.value.totalSessions;
    this.trainingData.schedule.weeklySessions = form.value.weeklySessions;
    this.trainingData.schedule.srtTime = form.value.srtTime;
    this.trainingData.schedule.endTime = form.value.endTime;
    console.log(this.trainingData);


    this.trainingService.postTraining(this.trainingData).subscribe(res=>{
      console.log(res);
     
    });

  }

}
