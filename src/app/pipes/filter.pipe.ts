import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * 
   * @param items (RecentTransaction Array) 
   * @param searchText (Search Text value)
   * Base on search text it will filter the Json object
   */

  transform(items: any[], searchText: string): any[] {
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter(function (item) {
      return item.merchant.toLowerCase().includes(searchText);
    });
  }
}