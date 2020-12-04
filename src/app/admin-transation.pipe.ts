import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminTransation'
})
export class AdminTransationPipe implements PipeTransform {

  transform(Response,search:string): any {
    if(search){
      return Response.filter(data=>{
        return data.date.toLowerCase().includes(search.toLowerCase());
      });
    }else{
      return Response;
  }

  }

}
