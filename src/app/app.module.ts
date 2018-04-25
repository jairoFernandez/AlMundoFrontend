import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HotelsService } from './services/hotels/hotels.service';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardHotelComponent } from './components/card-hotel/card-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CardHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
