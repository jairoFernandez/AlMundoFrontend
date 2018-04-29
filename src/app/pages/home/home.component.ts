import { Stars } from './../../components/search/search.component';
import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { Hotel } from '../../../models/hotel';
import { Search } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hotels: Hotel[];

  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
   this.ObtainHotels();
  }

  private ObtainHotels(query: string = null){
    this.hotelService.getAll(query).subscribe((hotels: Hotel[])=>{
      this.hotels = hotels;
    })
  }

  Search(event: Search){
    var query: string = "$filter=";
    
    if(event.hotelName != null){
      query = query + `contains(name,'${event.hotelName}')`;
    }

    var total = 0;
    event.stars.forEach((value: Stars) => {
      if(value.selected){
        total = total + 1;
        var quantity = value.value
        if(value.value > 0){
         //quantity = 5;
          if(total == 1){
            query = `${query} and stars eq ${quantity}`;
          }

          if(total > 1){
            query = `${query} or stars eq ${quantity}`;
          }
        }       
      }
    });
    console.log("Query", query);
    this.ObtainHotels(query);
  }
}
