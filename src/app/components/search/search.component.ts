import { environment } from './../../../environments/environment';
import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Output() searchOutput: EventEmitter<Search> = new EventEmitter<Search>();
  search: Search;
  public routeSearch: string;
  public routeStar: string;
  isCollapsedSearchHotel: boolean = false;
  isCollapsedSearchStar: boolean = false;
  stars: Stars[];
  all: boolean = true;
  hotelName: string; 

  constructor() { 
    this.stars = [];
  }

  ngOnChanges(){
  }

  ngOnInit() {
    this.routeSearch = environment.api + 'icons/filters/search.svg';
    this.routeStar = environment.api + 'icons/filters/star-blue.svg';
    this.stars = [
      {
        name: "all",
        value: 0,
        selected: true
      },
      {
        name: "five",
        value: 5,
        selected: false
      },
      {
        name: "four",
        value: 4,
        selected: false
      },
      {
        name: "three",
        value: 3,
        selected: false
      },
      {
        name: "two",
        value: 2,
        selected: false
      },
      {
        name: "one",
        value: 1,
        selected: false
      }
    ]

    this.hotelName = "";
    this.search = new Search();
    this.search.stars = this.stars;
    this.search.hotelName = this.hotelName;
  }

  openSearchHotel(){
    if(this.isCollapsedSearchHotel){
      this.isCollapsedSearchHotel = false;
    }else{
      this.isCollapsedSearchHotel = true;
    }
  }

  openSearchStar(){
    if(this.isCollapsedSearchStar){
      this.isCollapsedSearchStar = false;
    }else{
      this.isCollapsedSearchStar = true;
    }
  }

  Search(){
    this.searchOutput.emit(this.search);
  }

  UpdateNameHotel(event){
    this.search.hotelName = event.srcElement.value;
  }

  Update(event, quantity){
    var state = event.srcElement.checked;
    this.stars.forEach((value: Stars, index: number)=>{
      if((value.value) == quantity){
        value.selected = state;
      }
    });
  }
}

export class Stars{
  name: string;
  value: number;
  selected: boolean;
}

export class Search{
  stars: Stars[];
  hotelName: string;
}