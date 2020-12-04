import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-customer-myprofile',
  templateUrl: './customer-myprofile.component.html',
  styleUrls: ['./customer-myprofile.component.css']
})
export class CustomerMyprofileComponent implements OnInit {
val;
result;
  constructor(private route:Router,private service:BankserviceService) { }

  ngOnInit() {
    this.result=JSON.parse(localStorage.getItem('userdetails'));
    console.log(this.result);
    this.service.getCustomer(this.result.customerid).subscribe(data=>{
     this.val= data;
      console.log(this.val)
    })
  }
  request(){
    this.route.navigateByUrl('curequest');
    }
}
