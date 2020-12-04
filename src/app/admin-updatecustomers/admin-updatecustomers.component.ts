import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-admin-updatecustomers',
  templateUrl: './admin-updatecustomers.component.html',
  styleUrls: ['./admin-updatecustomers.component.css']
})
export class AdminUpdatecustomersComponent implements OnInit {
fetch;
new;
val;
  constructor(private route:Router,private activate:ActivatedRoute,private service:BankserviceService) { }

  ngOnInit() {
    this.activate.params.subscribe(data=>{
      this.fetch=data;
      console.log(this.fetch);
      
    this.service.getCustomer(this.fetch.customerid).subscribe(data=>{
          this.val=data;
          console.log(this.val);
      })
    })
  }
  goback(){
      this.route.navigateByUrl('managecus');
  }
  onUpdate(form:NgForm){
    // let Form = JSON.stringify(value);
      this.service.updatecustomers(form.value).subscribe(data=>{
        this.new=data['customer'];
        console.log(this.new);
      
      });
       form.reset();
  }
}
