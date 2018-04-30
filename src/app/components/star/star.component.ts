import { environment } from './../../../environments/environment';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input()quantity: number;
  stars: any[] = new Array<any>();
  route: string;

  constructor() {     
    this.route = environment.api;
  }

  ngOnChanges(){
    for (let i = 0; i < this.quantity; i++) { 
      this.stars.push(i);
    }
  }

  ngOnInit() {
    
  }
}