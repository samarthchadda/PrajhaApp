import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointmentsData = [];
  parentsName=[];
  constructor(private appointService:AppointmentService) { }

  ngOnInit(): void {
    this.appointService.fetchAllAppointments().subscribe(res=>{
      this.appointmentsData = res["allAppointments"];
      this.appointmentsData.forEach(appointData=>{
        
        this.appointService.getSingleParent({"phone":appointData["parent_phone"].toString()}).subscribe(res=>{
          console.log(appointData["parent_phone"]);
          appointData["parent_phone"] = res["Data"]["firstName"] + " "+res["Data"]["lastName"];
        })
      
      
      })
      // console.log(this.parentsName);
    })
  }

}
