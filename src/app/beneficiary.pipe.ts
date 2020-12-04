import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beneficiary'
})
export class BeneficiaryPipe implements PipeTransform {

  transform(Response,search:string): any {
    if(search){
      return Response.filter(values=>{
        return values.firstName.toLowerCase().includes(search.toLowerCase())||values.accountNo.toLowerCase().includes(search.toLowerCase());
      });
      
    }else{
      return Response;
    }
    
  }

}


