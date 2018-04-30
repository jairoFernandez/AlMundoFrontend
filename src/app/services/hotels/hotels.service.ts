import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../../models/hotel';

@Injectable()
export class HotelsService {
  private route: string;

  constructor(private http: HttpClient) { 
    this.route = environment.api + "api/Hotel"
  }

  getAll(query: string = null){
    return this.http.get<Hotel[]>(this.route + '?' + query);
  }

  getById(id: string){
    return this.http.get<Hotel>(this.route + '/' + id);
  }

  create(hotel: any){
    return this.http.post<Hotel>(this.route, hotel);
  }
}
