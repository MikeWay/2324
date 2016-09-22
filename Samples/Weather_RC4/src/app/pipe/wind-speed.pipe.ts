import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeed'
})
export class WindSpeedPipe implements PipeTransform {
  transform(value: any, units : string = "knots", conversion : number = 1.0 ): string {
    return value * conversion + " " + units ;
  }
}
