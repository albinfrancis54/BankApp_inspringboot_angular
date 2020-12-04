import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {

  constructor() { }

  data(value){
    return value;
  }
}
