import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
val;
count;
lastTransaction;
result;
res;
  constructor(private service:BankserviceService) { }

  ngOnInit() {
    this.val=JSON.parse(localStorage.getItem('userdetails'));
    console.log(this.val.customerid)
    this.service.getCustomer(this.val.customerid).subscribe(data=>{
      this.result=data;
      console.log(this.result)
    })
    this.service.getAllBeneficiary(this.val.customerid).subscribe(data=>{
      data['beneficiary'];
      // console.log(data['beneficiary'].length)
      this.count= data['beneficiary'].length;

    })

    // const local_val=JSON.parse(localStorage.getItem('beneficiary'));
    // console.log(local_val)
    // this.count= local_val.length;
    this.service.getTransactionById(this.val.customerid).subscribe(data=>{
     this.val= data['transaction']
      console.log(data)
      this.lastTransaction=this.val[this.val.length - 1];
      console.log(this.lastTransaction)
    })
    // const trans=JSON.parse(localStorage.getItem('transaction'));
    // console.log(trans)
    // this.lastTransaction=trans[trans.length - 1]
    // console.log(this.lastTransaction)
  }

}
