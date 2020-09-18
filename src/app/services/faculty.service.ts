import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http:HttpClient) { }


  fetchAllFaculties()
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/all-faculties');
  }

  fetchSingleFaculty(id)
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/all-faculties/'+id);
  }

  postFaculty(data)
  {   
    return this.http.post('https://prajhaapp.herokuapp.com/api/faculty-signup',data);
  }

  editFaculty(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/admin-edit-faculty',data);
  }
  
}
