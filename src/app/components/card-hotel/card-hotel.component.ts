import { Hotel } from './../../../models/hotel';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {
  @Input()hotel: Hotel;
  public route: string;
  stars: any[] = new Array<any>();
  routeImage: string;
  routeImageDefault: string;
  price: number = 0;

  constructor() {
    this.route = environment.api;

  }

  ngOnInit() {
    for (let i = 0; i < this.hotel.stars; i++) { 
      this.stars.push(i);
    }
    this.routeImage = this.route + '/images/hotels/' + this.hotel.image;
    this.routeImageDefault = this.route + '/images/default.jpg';  
    this.price = this.hotel.price;
  }

  updateUrl(event){
    this.routeImage = this.routeImageDefault;
  }

}
