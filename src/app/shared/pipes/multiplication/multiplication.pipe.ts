import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplication'
})
export class MultiplicationPipe implements PipeTransform {

  transform(value: number): any{
    return Math.pow(value, 10);
  }

}
