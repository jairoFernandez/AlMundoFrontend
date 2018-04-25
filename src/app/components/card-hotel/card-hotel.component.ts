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
  
  constructor() {
    this.route = environment.api;
  }

  ngOnInit() {
  }

}
