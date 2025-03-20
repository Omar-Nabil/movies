import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value : any[], target:string): any[] {
    return value.filter(ele => ele.title.toLowerCase().includes(target.toLowerCase()) )
  }

}
