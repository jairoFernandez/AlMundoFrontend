import { Stars } from './../../components/search/search.component';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { Hotel } from '../../../models/hotel';
import { Search } from '../../components/search/search.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hotels: Hotel[];
  hotelNuevo: Hotel;
  hotelForm: FormGroup;
  imageHotel: FileImage;

  constructor(
    private hotelService: HotelsService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { 
    this.imageHotel = new FileImage();
    this.hotelNuevo = new Hotel();
    this.hotelNuevo.name = '';
    this.hotelNuevo.stars = 1;
    this.hotelNuevo.price = 0;
    this.hotelNuevo.image = '';    
  }

  ngOnInit() {
   this.buildForm();
   this.ObtainHotels();
  }

  buildForm() {
    this.hotelForm = this.fb.group({
      name: [this.hotelNuevo.name, Validators.compose([Validators.required])],
      stars: [this.hotelNuevo.stars, Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])],
      file: [null, Validators.compose([Validators.required])],
      price: [this.hotelNuevo.price, Validators.compose([Validators.required])],
      image: [this.hotelNuevo.image]
    });
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

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      setTimeout(()=>{
        this.imageHotel.image = reader.result;
        this.imageHotel.name = event.target.files[0].name;
      }, 1000);      
    }
  }

  onSubmit(){
    if(!confirm("¿Está seguro de realizar esta operación?")) return false;
    
    let hotel = {
      name  : this.hotelForm.get('name').value,
      stars : this.hotelForm.get('stars').value,
      price : this.hotelForm.get('price').value,
      image : this.imageHotel,
      amenities: []
    }

    this.hotelService.create(hotel).subscribe((hotel: any)=>{
      this.hotelNuevo = new Hotel();
      this.hotelForm.reset();
      this.ObtainHotels();
      alert("Cambios realizados con éxito");
    });
  }

  Eliminar(event){
    if(!confirm("Está seguro de eliminar?")) return false;
    this.hotelService.delete(event._id).subscribe(()=>{
      this.ObtainHotels();
    });
  }
}

export class FileImage{
  name: string;
  image: string;
}