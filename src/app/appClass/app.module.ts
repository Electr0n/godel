import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent} from 'app/shopClass/shop.component';
import { ShopService } from 'app/shopClass/shop.service';
import { ItemComponent} from 'app/itemClass/item.component';
import { ItemService} from 'app/itemClass/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ShopService,
    ItemService
  ],
  bootstrap: [
    AppComponent,
    ShopComponent,
    ItemComponent
  ]
})
export class AppModule { }
