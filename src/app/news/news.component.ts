import { Component, OnInit } from '@angular/core';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
result;
  constructor(private service:BankserviceService) { }

  ngOnInit() {
    this.service.allNews().subscribe(Response=>{
      this.result=Response['news'];
    })
  }

}
