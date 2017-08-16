import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightComponent } from 'app/flightClass/flight.component';
import { FlightService } from 'app/flightClass/flight.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
// import { DndModule } from 'ng2-dnd';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule
    // DndModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAKQqR44qWYyavBzycT8EBQVG5t8cB74ec'
    // })
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
