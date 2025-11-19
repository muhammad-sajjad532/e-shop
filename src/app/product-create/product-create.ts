import { Component } from '@angular/core';
import { Products } from '../services/products';

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {

  constructor(private productsService: Products) {}

  createProduct(title: string, price: string, category: string) {
    this.productsService.addProduct({
    title,
    price: Number(price),
    category
   }).subscribe();
  }

}
