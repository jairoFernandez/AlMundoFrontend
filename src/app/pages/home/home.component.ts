import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { Hotel } from '../../../models/hotel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hotels: Hotel[];

  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
    this.hotelService.getAll().subscribe((hotels: Hotel[])=>{
      this.hotels = hotels;
    })
  }

}
