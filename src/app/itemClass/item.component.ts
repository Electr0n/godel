import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  items: Item[];
  editableItem: Item;

  constructor(private itemService: ItemService){}

  getItems(): void{
    this.items = this.itemService.getItems();
  }

  ngOnInit(): void{
    this.getItems();
  }

  // toggle item edit
  editItem(item: Item): void{
    this.editableItem = (this.editableItem === item) ? undefined : item;
  }
}