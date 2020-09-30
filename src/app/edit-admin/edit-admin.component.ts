import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SubAdminService } from '../services/sub-admin.service';


@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {


  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};


  permissions = ['Trainings','Courses','Revenues','Coaches Scheduling','Admins','News','Appointments'];
  id;
  subAdminPerm = [];

  subAdminData ={
    AdminId : null,
    AdminPassword:'',
    Permissions:[]
  };

  subAdminInfo ={
    adminId : null,
    password:'',
    permissions:[]
  };


  constructor(private route:ActivatedRoute,private subAdminService:SubAdminService,private routerBtn:Router) { 

    for(var i = 0;i<this.permissions.length;i++)
    {
      this.dropdownList.push({ item_id: i, item_text: this.permissions[i] });
    }

    // for(var i = 0;i<this.permissions.length;i++)
    // {
    //   this.dropdownList.push({ item_id: i, item_text: this.permissions[i] });
    // }

  }

  ngOnInit(): void {



    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Coached Scheduling' },
    //   { item_id: 5, item_text: 'News' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    console.log(this.subAdminPerm);









    this.route.params.subscribe((newParams:Params)=>{
          this.id = newParams['adminID'];

          this.subAdminService.fetchSingleAdmin(this.id).subscribe(res=>{
            
          this.subAdminData = res["SubAdmin"];
          console.log(this.subAdminData);

          this.subAdminPerm = this.subAdminData.Permissions;
          this.selectedItems = [
           
          
          ];
          this.subAdminPerm.forEach(per=>{
           let index = this.permissions.indexOf(per);
           this.selectedItems.push({ item_id: +index, item_text: per});
       
          })
          console.log(this.selectedItems);
          console.log(this.dropdownList)
         
          
         
      

          // console.log(this.permissions.indexOf("Revenues"));


          this.subAdminData.Permissions = [];
          
      })
    });

  }

  onChange(checkBox:any)
  { 
    this.subAdminData.Permissions.push(checkBox.value);
  }


    // for uni selection of checkbox
    data(e, id: any) {
      if (e.target.checked === true) {
        this.subAdminData.Permissions.push(id);
      } else {
        for (let i = 0; i < this.subAdminData.Permissions.length; i++) {
          if (this.subAdminData.Permissions[i] === id) {
            this.subAdminData.Permissions.splice(i, 1);
          }
        }
      }
    }




  onSubmit(form:NgForm)
  {
    // console.log(form.value);
    this.subAdminInfo.adminId = JSON.parse(this.id);
    this.subAdminInfo.password = form.value.password;
    this.subAdminInfo.permissions = this.subAdminData.Permissions;
    form.value.customList.forEach(lst=>{
        this.subAdminInfo.permissions.push(lst["item_text"]);
    })
    console.log(this.subAdminInfo);

    // saving changes to database
    this.subAdminService.editSubAdmin(this.subAdminInfo).subscribe(res=>{
      console.log(res);
      if(res["Status"]){
        window.alert(res["message"]);
        this.routerBtn.navigate(['/admin']);
      }
      else{
        window.alert("Error Occured");
      }
    })


  }

  deleteSubAdmin(id)
  { 
    console.log(id);
    //deleting sub-admin
    this.subAdminService.deleteAdmin({"id":+id}).subscribe(res=>{
      console.log(res);
      
     
    },err=>console.log(err));


  }



  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


}
