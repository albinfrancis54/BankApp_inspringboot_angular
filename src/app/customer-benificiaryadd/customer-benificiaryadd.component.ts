import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-customer-benificiaryadd',
  templateUrl: './customer-benificiaryadd.component.html',
  styleUrls: ['./customer-benificiaryadd.component.css']
})
export class CustomerBenificiaryaddComponent implements OnInit {
result;
values;
message:string;
failed:string;
  constructor(private route:Router,private service:BankserviceService) { }

  ngOnInit() {
  }
  goback(){
    this.route.navigateByUrl('cutrfunds');
  }

  onSubmit(form:NgForm){
    console.log(form.value)
      this.service.validateBeneficairy(form.value.firstName,form.value.lastName,form.value.accountNo).subscribe(customer=>{
      this.values=customer['customer'];
       var data = this.values[0];
       console.log(data)
      console.log(data.first)
      if((data.first==form.value.firstName)&&(data.last==form.value.lastName)&&(data.accountno==form.value.accountNo)){
        alert("beneficiary Found");
        const local_val=JSON.parse(localStorage.getItem('userdetails'));
        form.value['customerid']=local_val['customerid']
         console.log(form.value);
        this.service.addBeneficiary(form.value).subscribe(data=>{
        this.result=data;
        if(this.result.statusCode==200){
          this.failed='Beneficiary Added'
        }
        });
        form.reset();
      }else{
        alert('beneficiary Not Found');
      }
  })
  if(HttpErrorResponse){
    this.failed='failed to Add Beneficiary'
  }
    
  }
}
