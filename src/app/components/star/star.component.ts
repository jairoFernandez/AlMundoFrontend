import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input()quantity: number;
  stars: any[] = new Array<any>();
  route: string;

  constructor() { 
    this.route = environment.api;
  }

  ngOnInit() {
    for (let i = 0; i < this.quantity; i++) { 
      this.stars.push(i);
    }
  }
}