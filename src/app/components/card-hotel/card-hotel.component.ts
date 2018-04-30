import { Hotel } from './../../../models/hotel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss']
})
export class CardHotelComponent implements OnInit {
  @Input()hotel: Hotel;
  @Output()hotelDelete: EventEmitter<Hotel> = new EventEmitter<Hotel>();

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
    var price = this.hotel.price != null ? this.hotel.price.toString() : "0";
    this.price = parseInt(price);
  }

  updateUrl(event){
    this.routeImage = this.routeImageDefault;
  }

  Eliminar(){
    this.hotelDelete.emit(this.hotel);
  }

}