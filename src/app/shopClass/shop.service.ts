import { Injectable } from '@angular/core';

import { Shop } from './shop';
import { SHOPS } from './mock-shops';

@Injectable()
export class ShopService{
  getShops(): Shop[] {
    return SHOPS;
  }

  // addNewShop(newShop): void {
  // 	SHOPS.push(newShop);
  // }
}