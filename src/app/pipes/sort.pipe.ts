import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {
  /**
   * 
   * @param items (RecentTransaction Array) 
   * @param field (Sortby field name)
   * Sorting data base on field category
   */

  transform(items: any[], field: string, sortingType: boolean): any {

    if (field === 'merchant') {
      if (sortingType) {
        return items.sort((a, b) => a[field].toLowerCase() !== b[field].toLowerCase() ? a[field].toLowerCase() < b[field].toLowerCase() ? -1 : 1 : 0);
      }
      return items.sort((a, b) => a[field].toLowerCase() !== b[field].toLowerCase() ? a[field].toLowerCase() < b[field].toLowerCase() ? 1 : -1 : 0);
    }
    if (field === 'transactionDate' || field === 'amount') {
      if (sortingType) {
        return items.sort((a: any, b: any) => parseFloat(a[field]) !== parseFloat(b[field]) ? parseFloat(a[field]) < parseFloat(b[field]) ? -1 : 1 : 0);
      }
      return items.sort((a: any, b: any) => parseFloat(a[field]) !== parseFloat(b[field]) ? parseFloat(a[field]) < parseFloat(b[field]) ? 1 : -1 : 0);
    }
    return items;
  }

}