import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  fetchAllCourses()
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/allcourses');
  }

  postFile(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/upload-course-file',data);
  }


  postCourse(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/post-course',data);
  }


}
