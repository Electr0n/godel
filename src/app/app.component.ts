import { Component } from '@angular/core';
import { Shop } from './shop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Horns and hoofs';
  shop = Shops[];
}