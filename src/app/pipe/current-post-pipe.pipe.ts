import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'currentPostPipe'
})
export class CurrentPostPipePipe implements PipeTransform {

  transform(items: Post[], slug: String): Post[] {
    return items.filter(p => p.slug != slug)
  }

}
