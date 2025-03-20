import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(value : any[], target:string): any[] {
    return value.filter(ele => ele.name.toLowerCase().includes(target.toLowerCase()) )
  }

}
