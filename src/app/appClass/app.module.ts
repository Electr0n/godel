import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopComponent } from 'app/shopClass/shop.component';
import { ShopService } from 'app/shopClass/shop.service';
import { ItemComponent } from 'app/itemClass/item.component';
import { ItemService } from 'app/itemClass/item.service';
import { DndModule } from 'ng2-dnd';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKQqR44qWYyavBzycT8EBQVG5t8cB74ec'
    })
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
