import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {

  transform(value: number): unknown {
    let result: string;
    if (value >= 1_000 && value <1_000_000){
      result = (Math.round(value/1000)).toString() + "K"
    }
    else if (value >= 1_000_000 && value <1_000_000_000){
      result = (Math.round(value/1_000_000)).toString() + "M"
    }
    else{
      result = (Math.round(value/1_000_000_000)).toString() + "B"
    }
    return result;
  }

}
