import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { Copyright } from './directives/copyright';
import { APP_SETTINGS, appSettings } from './app.settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Copyright],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ]
})
export class App {
  //protected readonly title = signal('e-shop');

  settings = inject(APP_SETTINGS);
  title : string = '';

  private setTitle = () => {
  this.title = this.settings.title;
 }

 private changeTitle(callback: Function) {
 setTimeout(() => {
 callback();
 }, 2000);
}

constructor() {
 this.changeTitle(this.setTitle);
}
}
