import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: false => not pure fn will re-render
  // pure: true => pure fn wll be memorized // DEFAULT
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    reduceFn: (acc: any, curr: T) => any,
    initialValue: T
  ): unknown {
    return array.reduce(reduceFn, initialValue);
  }
}
