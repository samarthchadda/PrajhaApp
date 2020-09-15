import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {


  trainingInfo = [];


  constructor(private trainingService:TrainingService) { }



  ngOnInit(): void {
    this.trainingService.fetchAllTrainings().subscribe(res=>{
         
      this.trainingInfo = res["AllTrainings"];

      // this.trainingInfo.forEach(t=>{
      //   console.log(t.Fees);
      // })
    })
  }

}
