import { Component, OnInit } from '@angular/core';
import { RevenueService } from '../services/revenue.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  courseRevenues = [];
  appointRevenues = [];
  
  showCourseRev = true;

  constructor(private revenueService:RevenueService) { }

  ngOnInit(): void {

    this.revenueService.fetchAllCourseRevenue().subscribe(res=>{
    
      this.courseRevenues = res["revenues"];
      console.log(this.courseRevenues);
    });

    this.revenueService.fetchAllAppointRevenue().subscribe(res=>{
    
      this.appointRevenues = res["revenues"];
      console.log(this.appointRevenues);
    });


  }

  //for appointRevenues array in date descending order
  get sortAppointRevenues()
  {
    return this.appointRevenues.sort((a,b)=>{
        return <any>new Date(b.PaymentDate) - <any>new Date(a.PaymentDate) ;
    });
  }


  
  //for appointRevenues array in date descending order
  get sortCourseRevenues()
  {
    return this.courseRevenues.sort((a,b)=>{
        return <any>new Date(b.PaymentDate) - <any>new Date(a.PaymentDate) ;
    });
  }



  showCourse()
  {
    this.showCourseRev = true;
  }

  
  showAppoint()
  {
    this.showCourseRev = false;
  }

}
