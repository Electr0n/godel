import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopComponent } from 'app/shopClass/shop.component';
import { ShopService } from 'app/shopClass/shop.service';
import { ItemComponent } from 'app/itemClass/item.component';
import { ItemService } from 'app/itemClass/item.service';
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot()
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
