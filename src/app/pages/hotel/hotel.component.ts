import { Hotel } from './../../../models/hotel';
import { HotelsService } from './../../services/hotels/hotels.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  hotel: Hotel;
  public routeImage: string;
  routeImageDefault: string;
  routeAmenity: string = "";
  constructor(
    private route: ActivatedRoute, 
    private hotelService: HotelsService
  ) { 
    this.routeAmenity = environment.api + 'icons/amenities/'
    this.hotel = new Hotel();
    this.route.params.subscribe((params: any) => {
      if (params.id != undefined) {
        this.ObtainHotelInfo(params.id);
      }
      window.scrollTo(0, 0);
  });
  }

  ngOnInit() {   
    this.routeImageDefault = environment.api + '/images/default.jpg'; 
  }

  private ObtainHotelInfo(idHotel: string){
    this.hotelService.getById(idHotel).subscribe((hotel: Hotel)=>{
      this.hotel = hotel;
      this.routeImage = environment.api + '/images/hotels/' + this.hotel.image;
      this.hotel.price = parseInt(this.hotel.price.toString());
    })
  }

  updateUrl(event){
    this.routeImage = this.routeImageDefault;
  }
}
