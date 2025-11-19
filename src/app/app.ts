import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ProductList } from './product-list/product-list';
import { Copyright } from './directives/copyright';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable } from 'rxjs';
import { ProductList } from './product-list/product-list';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductList,
    Copyright,

  ],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
 
  settings = inject(APP_SETTINGS);
  
  
}