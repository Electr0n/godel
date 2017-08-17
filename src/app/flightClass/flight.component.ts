import { Component, OnInit } from '@angular/core';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit{
  flightStatus: string;
  flightsOut: Flight[];
  flightsIn: Flight[];
  p: number = 1;
  sortedColumn: string;
  sortedReverse: boolean;
  flightFilter: any = { apname: ''};
  hoursFilter: number;
  minsFilter: number;
  
  constructor(private flightService: FlightService){}

  getFlightsOut(): void{
    this.flightsOut = this.flightService.getFlightsOut();
  }
  getFlightsIn(): void{
    this.flightsIn = this.flightService.getFlightsIn();
  }

  ngOnInit(): void{
    if (this.flightsOut === undefined){
      this.getFlightsOut();
    }
    if (this.flightsIn === undefined){
      this.getFlightsIn();
    }
    if (this.flightStatus === undefined){
      this.flightStatus = 'arrival';
    }
    if (this.sortedColumn === undefined){
      this.sortedColumn = 'apname';
    }
    if (this.sortedReverse === undefined){
      this.sortedReverse = false;
    }
    if (this.hoursFilter === undefined){
      this.hoursFilter = 0;
    }
    if (this.minsFilter === undefined){
      this.minsFilter = 0;
    }
  }

  switchTab(s: string): void {
    this.flightStatus = s;
  }

  switchSort(str: string): void{
    if (this.sortedColumn === str){
      this.sortedReverse = !this.sortedReverse;
    } else {
      this.sortedColumn = str;
    }
  }
}