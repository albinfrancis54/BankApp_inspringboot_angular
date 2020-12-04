import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-cutomer-transaction',
  templateUrl: './cutomer-transaction.component.html',
  styleUrls: ['./cutomer-transaction.component.css']
})
export class CutomerTransactionComponent implements OnInit {
search:string;
result;
name;
customerid;
data;
  constructor(private service:BankserviceService) { }

  ngOnInit() {
    const local_val=JSON.parse(localStorage.getItem('userdetails'));
    // this.name=local_val['first']
   this.customerid=local_val['customerid']
   this.name=local_val['first']
   this.service.getTransactionById(this.customerid).subscribe(Response=>{
   this.result=Response['transaction'];
   console.log(this.result)
   localStorage.setItem('transaction',JSON.stringify(this.result));
    console.log(this.result)
    this.service.getTransactionByName(this.name).subscribe(Response=>{
      this.data=Response['transaction'];
    })
  // console.log(this.name);
  })
  }

}
