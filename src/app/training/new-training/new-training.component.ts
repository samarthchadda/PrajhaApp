import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  trainingImage;

  allTrCategories = [];
  categoryNames=[];

  newCategory = '';

  constructor(private trainingService:TrainingService,private routerBtn:Router) { }

  ngOnInit(): void {
    this.trainingService.getTrainingCategories().subscribe(res=>{
      
      this.allTrCategories = res["categories"];
      console.log(this.allTrCategories);
      this.allTrCategories.forEach(tr=>{
        this.categoryNames.push(tr["CategoryName"]);
      });
      console.log(this.categoryNames);
    })
  }


  selectImage(event)
  {
    const file = event.target.files[0];
    this.trainingImage = file;

  }



  addTrCategory()
  {
    console.log(this.newCategory);

    this.newCategory = this.newCategory.trim(); //to remove the spaces
    if(!this.newCategory)
    {
      window.alert("Enter Category Name");
    }
    else
    {
      this.categoryNames = [];
      this.trainingService.postTrainingCategories({"category_name":this.newCategory}).subscribe(res=>{
        console.log(res);
        if(res["status"]){
            this.ngOnInit();
        }
        else{
          window.alert("Error Occured : "+res);
        }
      })

    }   


  }




  onSubmit(form :NgForm)
  {
    

    const formData = new FormData();   
    formData.append('trainingCategory',form.value.trainingCategory);
    formData.append('description',form.value.description);    
    formData.append('trainingImage',this.trainingImage);

    //saving into database
    this.trainingService.postTraining(formData).subscribe(result=>{
      // console.log(result);
      if(result["status"]){
        window.alert("New Training Created");
        this.routerBtn.navigate(['/training']);
      }
      else{
        window.alert("Error Occured");
      }
    },err=>{
      console.log(err);
    })
        

  }


}
