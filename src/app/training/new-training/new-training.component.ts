import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  trainingImage;

  constructor(private trainingService:TrainingService) { }

  ngOnInit(): void {
  }


  selectImage(event)
  {
    const file = event.target.files[0];
    this.trainingImage = file;

  }



  onSubmit(form :NgForm)
  {
    

    const formData = new FormData();   
    formData.append('trainingCategory',form.value.trainingCategory);
    formData.append('description',form.value.description);    
    formData.append('trainingImage',this.trainingImage);

    //saving into database
    this.trainingService.postTraining(formData).subscribe(result=>{
      console.log(result);
    },err=>{
      console.log(err);
    })
        

  }


}
