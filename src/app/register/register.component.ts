import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
values;
  registerForm = this.fb.group({
    email:this.fb.control(''),
    password:this.fb.control(''),
    roles:this.fb.control('')
  });
  constructor(private service:BankserviceService,private fb: FormBuilder) { }

  ngOnInit() {
  }
register(form:NgForm){

  this.service.addAlllogins(form.value).subscribe(data=>{
    this.values=data;
  })
  form.reset();
}
}
