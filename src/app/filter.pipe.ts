import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(response,search:string): any {
    if(search){
      return response.filter(data=>{
        return data.accountno.toLowerCase().includes(search.toLowerCase())||data.first.toLowerCase().includes(search.toLowerCase());
      });
    }else{
      return response;
    }
  
  }

}

