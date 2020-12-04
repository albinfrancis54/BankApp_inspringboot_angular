import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankserviceService } from '../bankservice.service';
import { customvalidation } from './customValidation';

@Component({
  selector: 'app-customer-changepassword',
  templateUrl: './customer-changepassword.component.html',
  styleUrls: ['./customer-changepassword.component.css']
})
export class CustomerChangepasswordComponent implements OnInit {
  regForm:FormGroup;
  fetch;
  message:string;
  constructor(private fb: FormBuilder,private service:BankserviceService) { }

  ngOnInit() {
    this.regForm=this.fb.group({
      password:this.fb.control('',[Validators.required]),
      cnpassword:this.fb.control('',[Validators.required]),
  },{validators:customvalidation});


}
onSubmit(){
const local_val=JSON.parse(localStorage.getItem('userdetails'));
this.regForm.value['customerid']=local_val['customerid']
console.log(this.regForm.value)
this.service.changePassword(this.regForm.value.cnpassword,this.regForm.value.customerid).subscribe(data=>{
  this.fetch=data['customer'];
  console.log(this.fetch)
  if(data.statusCode==200){
    this.message='Password changed'
  }else if(HttpErrorResponse){
    this.message='Password failed to change'
  }
})
this.regForm.reset();
}
}