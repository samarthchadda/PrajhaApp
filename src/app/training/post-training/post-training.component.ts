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
<<<<<<< HEAD
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
=======
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
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
    }
    
  }
  

  ngOnInit(): void {
   
 
  }
<<<<<<< HEAD
 
  onChange(checkBox:any)
  { 
    this.courseData.schedule.availDay.push(checkBox.value);
=======
  
  onChange(checkBox:any)
  { 
    this.trainingData.schedule.availDay.push(checkBox.value);
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
  }
 
  onSubmit(form:NgForm)
  {
    
<<<<<<< HEAD
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


=======
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
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e

  }

}
