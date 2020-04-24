import { Pipe, PipeTransform } from '@angular/core';
import { DataLinkCovid } from './data-covid';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(items: DataLinkCovid[], searchText: string): any {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      let tags = item.tags;
      let filtertags = tags.filter( tag => {
        return tag.toLowerCase().includes(searchText);
      });
      return item.description.toLowerCase().includes(searchText) || item.link.toLowerCase().includes(searchText) || filtertags.length > 0;
    });
  }

}
