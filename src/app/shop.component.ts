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

  constructor(private shopService: ShopService){}

  getShops(): void{
    this.shops = this.shopService.getShops();
  }

  ngOnInit(): void{
    this.getShops();
  }
}