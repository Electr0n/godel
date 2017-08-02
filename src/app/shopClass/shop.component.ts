import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';
import { ShopService } from './shop.service';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  shops: Shop[];
  newShop: Shop;
  selectedShop: Shop;
  editableShop: Shop;

  constructor(private shopService: ShopService){}

  getShops(): void{
    this.shops = this.shopService.getShops();
  }

  ngOnInit(): void{
    // initialize shops
    if (this.shops === undefined){
      this.getShops();
    }

    // initialize new shop
    this.newShop = {
      id: 0,
      name: 'name',
      address: 'address',
      days: [false, false, false, false, false, false, false],
      startTime: '0:00',
      endTime: '24:00',
      latitude: 50.678418,
      longitude: 7.009007
    };
  }

  // toggle shop items if clicked
  onSelect(shop: Shop): void {
    this.selectedShop = (this.selectedShop === shop) ? undefined : shop;
  }

  // toggle shop edit if clicked
  editShop(shop: Shop): void {
    this.editableShop = (this.editableShop === shop) ? undefined : shop;
    event.stopPropagation();
  }

  createShop(): void{
    if (this.shops.length === 0){
      this.newShop.id = 1;
    } else {
      this.newShop.id = this.shops[this.shops.length - 1].id + 1;
    }
  }
  cancelShop(): void{
    this.newShop.id = 0;
  }
  saveShop(): void{
    this.shops.push(this.newShop);
    this.newShop = {
      id: 0,
      name: 'name',
      address: 'address',
      days: [false, false, false, false, false, false, false],
      startTime: '0:00',
      endTime: '24:00',
      latitude: 50.678418,
      longitude: 7.009007
    };
  }
  removeShop(shop: Shop): void{
    for(var i=0; i<this.shops.length; i++){
      if (this.shops[i].id === shop.id){
        this.shops.splice(i, 1);
      }
    }
  }
  // set coords for new shop
  setCoords(event: any): void{
    if (this.editableShop){
      this.editableShop.latitude = event.coords.lat;
      this.editableShop.longitude = event.coords.lng;
    } else {
      this.newShop.latitude = event.coords.lat;
      this.newShop.longitude = event.coords.lng;
    }
  }
}