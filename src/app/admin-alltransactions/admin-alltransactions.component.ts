import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-admin-alltransactions',
  templateUrl: './admin-alltransactions.component.html',
  styleUrls: ['./admin-alltransactions.component.css']
})
export class AdminAlltransactionsComponent implements OnInit {
result;
search:string;
  constructor(private service:BankserviceService) { }

  ngOnInit() {
  this.service.getAllTransactions().subscribe(Response=>{
    this.result=Response['transaction'];
  })
  }

}
