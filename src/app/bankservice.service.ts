import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {
  httpurl="http://localhost:8080";

  constructor(private http: HttpClient) { }

  addAlllogins(register){
    return this.http.post(`${this.httpurl}/addlogin`,register);
  }
  getAlllogins():Observable<any>{
    return this.http.get(`${this.httpurl}/bankapplogin`);
  }

  addnews(news){
    return this.http.post(`${this.httpurl}/postnews`,news);
  }
  allNews():Observable<any>{
    return this.http.get(`${this.httpurl}/allnews`)
  }
  Addcustomers(customer){
    return this.http.post(`${this.httpurl}/addcustomer`,customer);
  }

  getAllCustomers():Observable<any>{
    return this.http.get(`${this.httpurl}/allcustomers`);
  }

   updatecustomers(customers){
     return this.http.put(`${this.httpurl}/updatecustomers`,customers);
   }

   getCustomer(id):Observable<any>{
     return this.http.get(`${this.httpurl}/customer?customerid=${id}`);
   }
   deleteCustomer(id){
     return this.http.delete(`${this.httpurl}/deletecustomer?customerid=${id}`);
   }
   addQueue(customer){
    return this.http.post(`${this.httpurl}/addqueue`,customer);
  }
  getAllQueue():Observable<any>{
    return this.http.get(`${this.httpurl}/allqueue`)
  }

  validateBeneficairy(firstName,lastName,accountNo){
    return this.http.get(`${this.httpurl}/validatebeneficiary?first=${firstName}&last=${lastName}&accountno=${accountNo}`)
  }
  addBeneficiary(beneficairy){
    return this.http.post(`${this.httpurl}/addBeneficiary`,beneficairy);
  }

  getAllBeneficiary(id):Observable<any>{
    return this.http.get(`${this.httpurl}/allbeneficiary?customerid=${id}`);
  }
  deleteBeneficiary(id){
    return this.http.delete(`${this.httpurl}/beneficiary?beneficiaryid=${id}`);
  }
  getPassword(id):Observable<any>{
    return this.http.get(`${this.httpurl}/getpassword?customerid=${id}`)
  }

  addTransactions(transaction){
    return this.http.post(`${this.httpurl}/addtransaction`,transaction);
  }
  transferAmount(id,accountno,amount){
    return this.http.get(`${this.httpurl}/debitcal?customerid=${id}&accountno=${accountno}&debit=${amount}`);
  }
  getTransactionById(transaction):Observable<any>{
    return this.http.get(`${this.httpurl}/transactions?customerid=${transaction}`);
  }
  getTransactionByName(name):Observable<any>{
    return this.http.get(`${this.httpurl}/transactionbyname?beneficiaryname=${name}`);
  }
  getAllTransactions():Observable<any>{
    return this.http.get(`${this.httpurl}/alltransactions`);
  }
  addgreviance(greviance){
    return this.http.post(`${this.httpurl}/addgrevieance`,greviance);
  }
  getAllgrevience(id):Observable<any>{
    return this.http.get(`${this.httpurl}/allgrevieance?customerid=${id}`)
  }

  acceptGreviance(data):Observable<any>{
    return this.http.get(`${this.httpurl}/acceptgrevience?grevieanceid=${data}`)
  }
  declineGreviance(data):Observable<any>{
    return this.http.get(`${this.httpurl}/declinegrevience?grevieanceid=${data}`)
  }
  changePassword(pas,id):Observable<any>{
    return this.http.get(`${this.httpurl}/changepassword?customerid=${id}&password=${pas}`);
  }
}
