import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {
fetch;
pass;
result;
value;
transaction;
message:string;
constructor(private route:Router,private activate:ActivatedRoute,private service:BankserviceService) { }

ngOnInit() {
    this.activate.queryParams.subscribe(data=>{
      this.fetch=data;
      console.log(this.fetch)
    })  }
goback(){
    this.route.navigateByUrl('cutrfunds');
  }
onSubmit(form:NgForm){
  console.log(typeof(form.value));
  var day=new Date();   
  const local_val=JSON.parse(localStorage.getItem('userdetails'));
  form.value['senderName']=local_val['first']
  form.value['customerid']=local_val['customerid']
  form.value['date']=day.toLocaleString();
  console.log(form.value);
  this.service.getPassword(form.value['customerid']).subscribe(data=>{
    this.pass=data['customer'];
    var result=this.pass[0];
    console.log(this.pass)
    console.log(form.value['password'])
      if(result.password==form.value.password){
        alert("password match")
    console.log(form.value.debit)
  this.service.transferAmount(form.value.customerid,form.value.accountNo,form.value.debit).subscribe(data=>{
        this.value=data;
        console.log(this.value)
        if(this.value.statusCode==401){
            this.message='No sufficient balance'
        }else{
          this.service.addTransactions(form.value).subscribe(data=>{
            this.result=data;
            if(this.result.statusCode==200){
              this.message='Transaction Successfully';
            }
          })
          form.reset();
          }
        })
   this.service.getAllTransactions().subscribe(Response=>{
      this.transaction=Response['transaction'];
      console.log(this.transaction);
     })
        
    }else{
      alert("Invalid password");
      this.message="Transaction failed"
      }
    })

  }
}
