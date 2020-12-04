import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(Response,search:string): any {
    if(search){
      return Response.filter(data=>{
        return data.beneficiaryname.toLowerCase().includes(search.toLowerCase())||data.accountNo.toLowerCase().includes(search.toLowerCase())||data.date.toLowerCase().includes(search.toLowerCase());
      });
    }else{
      return Response;
  }

  }
}
