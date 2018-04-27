import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public routeSearch: string;
  public routeStar: string;
  isCollapsed: boolean = false;
  stars: Stars[];

  constructor() { 
    this.stars = [];
  }

  ngOnInit() {
    this.routeSearch = environment.api + 'icons/filters/search.svg';
    this.routeStar = environment.api + 'icons/filters/star-blue.svg';
    this.stars = [
      {
        name: "five",
        value: 5
      },
      {
        name: "four",
        value: 4
      },
      {
        name: "three",
        value: 3
      },
      {
        name: "two",
        value: 2
      },
      {
        name: "one",
        value: 1
      }
    ]

    console.log(this.stars)
  }

  showBsCollapse() {}

  shownBsCollapse() {}

  hideBsCollapse() {}

  hiddenBsCollapse() {}
}

export class Stars{
  name: string;
  value: number;
}