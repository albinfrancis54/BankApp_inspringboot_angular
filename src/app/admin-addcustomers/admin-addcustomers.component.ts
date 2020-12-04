import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';
import { SimpleserviceService } from '../simpleservice.service';

@Component({
  selector: 'app-admin-addcustomers',
  templateUrl: './admin-addcustomers.component.html',
  styleUrls: ['./admin-addcustomers.component.css']
})
export class AdminAddcustomersComponent implements OnInit {
result;
data;
message:string;
  constructor(private service:BankserviceService,private route:Router,private simple:SimpleserviceService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){

    console.log(form.value);
    this.service.Addcustomers(form.value).subscribe(data=>{
    this.result=data;
    if(this.result.statusCode==200){
      this.message='New Account Added Successfully';
    }
   
    console.log(data);
    
    })
    if(HttpErrorResponse){
      this.message='failed to Add Account'
    }
    form.reset();

    // this.route.navigate([`notification`],{
    //     queryParams:{
    //       customerid:form.value.customerid,
    //       first:form.value.first,
    //       last:form.value.last,
    //       phone:form.value.phone,
    //       dob:form.value.dob,
    //       aadhar:form.value.aadhar,
    //       email:form.value.email,
    //       gender:form.value.gender,
    //       address:form.value.address,
    //       accountno:form.value.accountno,
    //       pin:form.value.pin,
    //       branch:form.value.branch,
    //       username:form.value.username,
    //       password:form.value.password,
    //       openb:form.value.openb
  
  
    //     }
       
    //   });console.log(form.value.openb);
    }


    // this.result=form.value;
    // this.data= localStorage.setItem('customer',JSON.parse(form.value));
    // console.log(this.data);


    //  data={

    //     customerid:form.value.customerid,
    //     first:form.value.first,
    //     last:form.value.last,
    //     phone:form.value.phone,
    //     dob:form.value.dob,
    //     aadhar:form.value.aadhar,
    //     email:form.value.email,
    //     gender:form.value.gender,
    //     address:form.value.address,
    //     accountno:form.value.accountno,
    //     pin:form.value.pin,
    //     branch:form.value.branch,
    //     username:form.value.username,
    //     password:form.value.password,
    //     openb:form.value.openb

    //   }


    // this.simple.data(form.value);


    //
}


