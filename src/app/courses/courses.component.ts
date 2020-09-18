import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseInfo = [];

  constructor(private courseService:CoursesService, private routerBtn:Router) { }

  ngOnInit(): void {
    this.courseService.fetchAllCourses().subscribe(res=>{
         
      this.courseInfo = res["AllCourses"];

      this.courseInfo.forEach(c=>{
<<<<<<< HEAD
        // console.log(c.Fees);
=======
        console.log(c.Fees);
>>>>>>> 572d478ea633d70c38dc8806b2b11c1f4e52bc2e
      })
    })
  }

  newCourse()
  {
      this.routerBtn.navigate(['/course/create']);
  }
  

}
