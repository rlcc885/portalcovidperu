import { Component, OnInit } from '@angular/core';
import { data_link_covid, DataLinkCovid } from './data-covid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portalcovidperu';
  data_links: DataLinkCovid[];
  searchText: string;
  today: number;
  allTags: string[] = [];
  showAllTags = true;

  AppComponent() { }

  ngOnInit(): void {
    this.data_links = data_link_covid;
    this.today = Date.now();
    this.data_links.forEach( link => {
      link.tags.forEach( tag => {
        if(!this.allTags.find( finalTag => finalTag == tag )) this.allTags.push(tag);
      })
    });
    this.allTags.sort();
  }

  toogleViewTags(){
    this.showAllTags = !this.showAllTags;
  }
}
