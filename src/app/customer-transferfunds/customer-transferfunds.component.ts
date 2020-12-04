import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'url';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-customer-transferfunds',
  templateUrl: './customer-transferfunds.component.html',
  styleUrls: ['./customer-transferfunds.component.css']
})
export class CustomerTransferfundsComponent implements OnInit {
fetch;
id;
values;
search:string;
message:string;
  constructor( private route:Router,private service:BankserviceService) { }

  ngOnInit() {
    const local_val=JSON.parse(localStorage.getItem('userdetails'));
    this.id=local_val['customerid']
    this.service.getAllBeneficiary(this.id).subscribe(Response=>{
      this.fetch=Response['beneficiary'];
      console.log(Response)
      localStorage.setItem('beneficiary',JSON.stringify(this.fetch));
      console.log(this.fetch)
    })
  }
  Add(){
    this.route.navigateByUrl('cubenificiary');
    }
    transfer(first,last,account){
      this.route.navigate(['cupayment'],{
        queryParams:{
          firstName:first,
          lastName:last,
          accountNo:account
        }
      });
    }
  delete(id){
    this.service.deleteBeneficiary(id).subscribe(data=>{
      this.values=data;
      if(this.values.statusCode==200){
        this.message='Beneficiary Deleted Successfully'
        this.service.getAllBeneficiary(this.id).subscribe(Response=>{
          this.fetch=Response['beneficiary'];
          console.log(Response)
        })
      }

    });
    if(HttpErrorResponse){
      this.message='Failed to delete'
    }
    
  }
}
