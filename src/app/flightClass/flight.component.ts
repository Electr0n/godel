import { Component, OnInit } from '@angular/core';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit{
  flights: Flight[];
  flightStatus: boolean;
  flightsOut: Flight[];
  flightsIn: Flight[];
  
  constructor(private flightService: FlightService){}

  getFlights(): void{
    this.flights = this.flightService.getFlights();
  }

  ngOnInit(): void{
    if (this.flights === undefined){
      this.getFlights();
      // this.getFlightsOut();
      // this.getFlightIn();  
    }

  }
}