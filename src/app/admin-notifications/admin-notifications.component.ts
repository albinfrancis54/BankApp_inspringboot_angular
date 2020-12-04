import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminAddcustomersComponent } from '../admin-addcustomers/admin-addcustomers.component';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
fetch;
adddata;
declinedata;
  constructor(private activate:ActivatedRoute,private service:BankserviceService) { }

  ngOnInit() {
    // this.activate.queryParams.subscribe(data=>{
    //   this.fetch=data;
    //   console.log(this.fetch);
      
  // });
    // this.fetch=this.simple;
    // console.log(this.fetch);
    // const fetch=JSON.parse(localStorage.getItem('customerdetails'));
    // console.log(fetch);
      this.service.getAllQueue().subscribe(data=>{
        this.fetch=data['greviance'];
        console.log(this.fetch);
      })

      // this.service.getAllgrevience().subscribe(data=>{
      //   this.fetch=data;

      //   console.log(this.fetch)
      // })
}
Accept(data){
  // console.log(data)
  // console.log(data.first);
console.log(data)

  this.service.acceptGreviance(data).subscribe(data=>{
    this.adddata=data;
    this.service.getAllQueue().subscribe(data=>{
      this.fetch=data['greviance'];
      console.log(this.fetch);
    })

    
  })
  // this.service.Addcustomers(data).subscribe(data=>{
  //   this.adddata=data;
  // })
}
decline(data){
  this.service.declineGreviance(data).subscribe(data=>{
    this.declinedata=data;
    this.service.getAllQueue().subscribe(data=>{
      this.fetch=data['greviance'];
      console.log(this.fetch);
    })

    
  })
}
}