import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-admin-postnews',
  templateUrl: './admin-postnews.component.html',
  styleUrls: ['./admin-postnews.component.css']
})
export class AdminPostnewsComponent implements OnInit {
data;
message:string;
  constructor(private service:BankserviceService,private fb: FormBuilder) { }

  ngOnInit() {
  }
onSubmit(form:NgForm){
  console.log(form.value);
 
    this.service.addnews(form.value).subscribe(response=>{
      
      this.data=response;
      console.log(response);
     if(this.data.statusCode==200){
       this.message='News Posted Successfully'
     }  
    })
    if(HttpErrorResponse){
      this.message='failed to Add Beneficiary'
    }
    form.reset();
    
}
}
