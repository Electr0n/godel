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
  newItem: Item;

  constructor(private itemService: ItemService){}

  getItems(): void{
    this.items = this.itemService.getItems();
  }

  ngOnInit(): void{
    this.getItems();

    this.newItem = {
      id: 0,
      name: 'name',
      desc: 'description',
      price: 0
    }
  }

  // toggle item edit
  editItem(item: Item): void{
    this.editableItem = (this.editableItem === item) ? undefined : item;
    event.stopPropagation();
  }
  // to prevent propogation when clicking shop's items
  stubItem(): void{
    event.stopPropagation();
  }
  createItem(): void{
    this.newItem.id = this.items[this.items.length - 1].id + 1;
    event.stopPropagation();
  }
  cancelItem(): void{
    this.newItem.id = 0;
    event.stopPropagation();
  }
  saveItem(): void{
    this.items.push(this.newItem);
    this.newItem = {
      id: 0,
      name: 'name',
      desc: 'description',
      price: 0
    };
    event.stopPropagation();
  }
  removeItem(item: Item): void{
    this.items.splice((item.id - 1), 1);
    event.stopPropagation();
  }
}