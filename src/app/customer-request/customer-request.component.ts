import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent implements OnInit {
fetch;
message:string;
  constructor(private service:BankserviceService) { }

  ngOnInit() {
  }
onSubmit(form:NgForm){
  console.log(form.value)
  const value=JSON.parse(localStorage.getItem('userdetails'));

  form.value['customerid']=value['customerid']

  form.value['firstName']=value['first']
  console.log(form.value)
  this.service.addgreviance(form.value).subscribe(data=>{
    this.fetch=data;
    console.log(this.fetch)
    if(this.fetch.statusCode==200){
      this.message="Request sent "
    }
  })
  if(HttpErrorResponse){
    this.message="Request Failed"
  }
  form.reset();
}
}