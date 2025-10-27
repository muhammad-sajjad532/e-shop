import { Component, input, output} from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  
})
export class ProductDetail{

  
  product = input<Product>();
  added = output<Product>();

  addToCart() {
    this.added.emit(this.product()!);
  }


  get productTitle() {
  return this.product()!.title;
 } 

}
