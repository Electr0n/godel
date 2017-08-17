import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightComponent } from 'app/flightClass/flight.component';
import { FlightService } from 'app/flightClass/flight.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule,
    Ng2FilterPipeModule
  ],
  providers: [
    FlightService
  ],
  bootstrap: [
    AppComponent,
    FlightComponent
  ]
})
export class AppModule { }
