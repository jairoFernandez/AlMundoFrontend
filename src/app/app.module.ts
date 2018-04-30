import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HotelsService } from './services/hotels/hotels.service';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule, CollapseModule, CollapseDirective } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardHotelComponent } from './components/card-hotel/card-hotel.component';
import { DefaultUrlDirective } from './directive/default-url.directive';
import { SearchComponent } from './components/search/search.component';

import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { StarComponent } from './components/star/star.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CardHotelComponent,
    DefaultUrlDirective,
    SearchComponent,
    StarComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    CollapseModule,
    NgHttpLoaderModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
