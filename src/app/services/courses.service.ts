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

<<<<<<< HEAD
  fetchSingleCourse(id)
  {
    return this.http.get('https://prajhaapp.herokuapp.com/api/allcourses/'+id);
  }

=======
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
  postFile(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/upload-course-file',data);
  }


  postCourse(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/post-course',data);
  }

<<<<<<< HEAD
  editCourse(data)
  {
    return this.http.post('https://prajhaapp.herokuapp.com/api/edit-course',data);  
  }

=======
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e

}
