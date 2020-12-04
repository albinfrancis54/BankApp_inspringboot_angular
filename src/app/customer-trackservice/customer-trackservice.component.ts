import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-customer-trackservice',
  templateUrl: './customer-trackservice.component.html',
  styleUrls: ['./customer-trackservice.component.css']
})
export class CustomerTrackserviceComponent implements OnInit {
fetch;
id
  constructor(private service:BankserviceService) { }

  ngOnInit() {
    const local_val=JSON.parse(localStorage.getItem('userdetails'));
    this.id=local_val['customerid']
    this.service.getAllgrevience(this.id).subscribe(data=>{
      this.fetch=data['greviance'];
      console.log(data)
    })
  }

}
