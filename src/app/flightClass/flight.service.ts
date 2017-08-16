import { Injectable } from '@angular/core';

import { Flight } from './flight';
import { FLIGHTS } from './mock-flights';

@Injectable()
export class FlightService{
  getFlights(): Flight[] {
    return FLIGHTS;
  }
  // getFlightsOut(): Flight[] {
  //   FLIGHTS.filter(f => f.flstatus === 1)
  //   return FLIGHTS;
  // }
  // getFlightsIN(): Flight[] {
  //   FLIGHTS.filter(f => f.flstatus === 2)
  //   return FLIGHTS;
  // }
}