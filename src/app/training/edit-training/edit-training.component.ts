import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.css']
})
export class EditTrainingComponent implements OnInit {

  trainingCode;

  days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  //creating JS object for training
  trainingData = {
    Code:null,
    Title:'',
    TrainingCategory:'',
    Description:'',
    Method:'',
    Fees:null,
    Faculty:'',
    Schedule:{
      sessionNm:'',
      totalSessions:null,
      weeklySessions:null,
      availDay:[],
      srtTime:'',
      endTime:'',            
    }
    
  }

  trainingInfo = {
    code:null,
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

  
  constructor(private route:ActivatedRoute,
              private trainingService:TrainingService) { }

  ngOnInit(): void {

    this.route.params.subscribe((newParams:Params)=>{
        this.trainingCode = newParams['code'];

        this.trainingService.getSingleTraining(this.trainingCode).subscribe(result=>{
       
          this.trainingData = result["Data"];
          

          this.trainingData.Schedule.availDay =[];
        })
       
    })
    

  }

  
  onChange(checkBox:any)
  { 
    this.trainingData.Schedule.availDay.push(checkBox.value);
  }
 
  onSubmit(form:NgForm)
  {  
    this.trainingData.Title = form.value.CourseTitle;
    this.trainingData.TrainingCategory = form.value.Category;
    this.trainingData.Description = form.value.Description;
    this.trainingData.Method = form.value.Method;
    this.trainingData.Fees = form.value.Fees;
    this.trainingData.Faculty = form.value.Faculty;
    this.trainingData.Schedule.sessionNm = form.value.SessionName;
    this.trainingData.Schedule.totalSessions = form.value.totalSessions;
    this.trainingData.Schedule.weeklySessions = form.value.weeklySessions;
    this.trainingData.Schedule.srtTime = form.value.srtTime;
    this.trainingData.Schedule.endTime = form.value.endTime;
    

    //trainingInfo for posting to server
    this.trainingInfo.code = JSON.parse(this.trainingCode);
    this.trainingInfo.title = this.trainingData.Title;
    this.trainingInfo.category = this.trainingData.TrainingCategory;
    this.trainingInfo.description = this.trainingData.Description;
    this.trainingInfo.method = this.trainingData.Method;
    this.trainingInfo.fees = this.trainingData.Fees;
    this.trainingInfo.faculty = this.trainingData.Faculty;
    this.trainingInfo.schedule.sessionNm = this.trainingData.Schedule.sessionNm;
    this.trainingInfo.schedule.totalSessions = this.trainingData.Schedule.totalSessions;
    this.trainingInfo.schedule.weeklySessions = this.trainingData.Schedule.weeklySessions;
    this.trainingInfo.schedule.srtTime = this.trainingData.Schedule.srtTime;
    this.trainingInfo.schedule.endTime = this.trainingData.Schedule.endTime;
    this.trainingInfo.schedule.availDay = this.trainingData.Schedule.availDay;
       
    
    //saving changes to database
    this.trainingService.edittraining(this.trainingInfo).subscribe(result=>{
          console.log(result);
    })

  }
}
