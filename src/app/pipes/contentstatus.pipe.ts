import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentstatus'
})
export class ContentstatusPipe implements PipeTransform {

  transform(value: any, args?:any):any {
    if(value.length>6){

    return "good content";
    }
    else{
      return "Short Content";
    }
  }

}
