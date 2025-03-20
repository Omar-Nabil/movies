import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(value: string, number:number): string {
    return value.split(" ").splice(0,number).join(" ");
  }

}
