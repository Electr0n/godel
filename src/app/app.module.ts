import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent} from './shop.component';
import { ShopService } from './shop.service';
import { ItemComponent} from './item.component';
import { ItemService} from './item.service';

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
