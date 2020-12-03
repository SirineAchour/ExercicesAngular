import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_IMAGE = 'a1.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (! path.trim().length){
      return DEFAULT_IMAGE;
    }
    return path;
  }

}
