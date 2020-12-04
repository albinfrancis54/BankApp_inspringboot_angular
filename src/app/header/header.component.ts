import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
isUser(){
  // const userdetails =JSON.parse(localStorage.getItem('userdetails'));
  if(localStorage.getItem('userdetails')){
  return true;
  
  }else{
    return false;
  }
}

isAdmin(){
  if(localStorage.getItem('admindetails')){
    return true;
    }else{
      return false;
    }
}

isLogedcs() {
  return localStorage.getItem('userdetails') ? true : false;
}


isLogedad(){
  return localStorage.getItem('admindetails') ? true : false;
}
logout() {
  localStorage.clear();
  this.route.navigateByUrl('home');
}
}
