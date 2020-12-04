import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminUpdatecustomersComponent } from '../admin-updatecustomers/admin-updatecustomers.component';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-admin-managecustomers',
  templateUrl: './admin-managecustomers.component.html',
  styleUrls: ['./admin-managecustomers.component.css']
})
export class AdminManagecustomersComponent implements OnInit {
data;
search:string;
customerid;
select;
del;

  constructor(private route:Router,private service:BankserviceService) { }

  ngOnInit() {
    this.service.getAllCustomers().subscribe(response=>{
      this.data=response['customer'];
      console.log(this.data);
    })
  }

  update(value){
    console.log(value)
    // customerid=value.customerid;

    this.customerid=value.customerid;
    console.log(this.customerid)
     this.route.navigate([`updatecus/${this.customerid}`]);
     
    //  ,{
    //    queryParams:{
    //     customerid:value.customerid,
    //     first:value.first,
    //     last:value.last,
    //     phone:value.phone,
    //     dob:value.dob,
    //     aadhar:value.aadhar,
    //     email:value.email,
    //     gender:value.gender,
    //     address:value.address,
    //     accountno:value.accountno,
    //     pin:value.pin,
    //     branch:value.branch,
    //     username:value.username,
    //     password:value.password,
    //     openb:value.openb

    //    }
    //  });
  }
Delete(id){
  this.service.deleteCustomer(id).subscribe(data=>{
    this.del= data['customer'];
    
      this.service.getAllCustomers().subscribe(response=>{
      this.data=response['customer'];
      console.log(this.data);
    })
  })
}
}
