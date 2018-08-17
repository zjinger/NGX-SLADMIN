import { Pipe, PipeTransform } from '@angular/core';
import { layoutPaths } from '../shared.constants';

@Pipe({
  name: 'appPicture'
})
export class AppPicturePipe implements PipeTransform {

  transform(value: any): any {
    return layoutPaths.images.root + value;
  }

}
