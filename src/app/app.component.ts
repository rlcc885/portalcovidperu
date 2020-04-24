import { Component, OnInit } from '@angular/core';
import { data_link_covid } from './data-covid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portalcovidperu';
  data_links: any[];
  searchText: string;
  today: number;
  AppComponent() { }

  ngOnInit(): void {
    this.data_links = data_link_covid;
    this.today = Date.now();
  }
}
