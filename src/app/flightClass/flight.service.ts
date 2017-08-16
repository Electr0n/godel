import { Injectable } from '@angular/core';

import { Flight } from './flight';
import { FLIGHTS } from './mock-flights';

@Injectable()
export class FlightService{
  
  getFlightsOut(): Flight[] {
    return FLIGHTS.filter(f => f.type === 'departure');
  }
  getFlightsIn(): Flight[] {
    return FLIGHTS.filter(f => f.type === 'arrival');
  }
}