import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  log;
  // d;
  // k;
  cust;
  // c;
  message:string;
  loginForm = this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control('')
  });
  constructor( private route:Router,private service:BankserviceService,private fb: FormBuilder) { }

  ngOnInit() {
  }
  login(){

    this.service.getAllCustomers().subscribe(data=>{
      this.cust=data['customer'];
      // this.c=this.cust[2];
      console.log(this.cust)
      // console.log(this.cust.length)
      // console.log(data.data[].email);
      console.log(this.loginForm.value.email);
       for(let i=0;i<data.customer.length;i++){
      if((this.loginForm.value.email===data.customer[i].username )&&(this.loginForm.value.password===data.customer[i].password)){
        if(data.customer[i].type==='user'){
        this.message='loggedin successfully';
        console.log(this.message);
        setTimeout(()=>{
          this.message=null;
        },500);
        localStorage.setItem('userdetails',JSON.stringify(data.customer[i]));
        console.log('stored locally');
        this.route.navigateByUrl('cushome');
      }else{
        this.message='enter a valid mail id';
      }
    }
  }
})
    this.service.getAlllogins().subscribe(response=>{
        this.log=response['login'];

        console.log(response);
        // this.d=this.log[0];
        // this.k=this.log[1];
        console.log(this.log);
        // console.log(this.d);

        // console.log(this.log[0].email)
        for(let i=0;i<this.log.length;i++){
        if((this.loginForm.value.email===this.log[i].email )&&(this.loginForm.value.password===this.log[i].password)){
        if(this.log[i].roles==='admin'){
          this.message='Logined successfully';
          console.log(this.message);
          setTimeout(()=>{
            this.message=null;
          },500);
          localStorage.setItem('admindetails',JSON.stringify(this.log[i]));
          console.log('stored locally');
          this.route.navigateByUrl('adminhome');
        }
        else{
          this.message='Invalid credentiatials';
          console.log(this.message);
        }
        
      }
    }


        // if(this.loginForm.value.email===this.d.email){
        //    localStorage.setItem('userDetails', JSON.stringify({ email: `${this.d.email}`, password: `${this.d.password}` }));
        //   console.log(this.d.email);
        //   // console.log('userDetails');
        //   if(this.d.roles==='user'){
        //    this.route.navigateByUrl(`customerheader`);
        //   }
        //   if(this.d.roles==='admin'){
        //     this.route.navigateByUrl(`adminheader`);
        //   }
        //   else{
        //         return false;
        //   }
        // }
    })

    
   
  }
}
