import { Injectable } from '@angular/core';
import { Products } from '../../services/products';
import { Product } from '../../product';

@Injectable()
export class ProductView {
    private product : Product | undefined
  constructor(private productService : Products){}

  getProduct(id: number): Product | undefined {
 const products = this.productService.getProducts();
 if (!this.product) {
 this.product = products.find(product => product.id === id)
 }
 return this.product;
 }
}
