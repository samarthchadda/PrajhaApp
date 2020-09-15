import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http:HttpClient) { }

  fetchAllTrainings()
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/alltrainings');
  }

  postTraining(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/post-training',data);
  }

  getSingleTraining(code)
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/single-training/'+code);
  }

  edittraining(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/edit-training',data);
  }

}
