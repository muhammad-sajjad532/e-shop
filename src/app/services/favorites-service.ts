import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Products } from '../services/products';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends Products{

 constructor(){
  super();
 }
 override getProducts(): Product[] {
 return super.getProducts().slice(1, 3);
}
}
