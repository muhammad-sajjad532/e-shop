import { CommonModule } from '@angular/common';
import { Component, input, output, OnChanges } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { Products } from '../services/products';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnChanges {
  id = input<number>();
  product$: Observable<Product> | undefined;
  added = output();

  constructor(private products: Products) { }
  ngOnChanges() {
    this.product$ = this.products.getProduct(this.id()!);
  }

  addToCart() {
    this.added.emit();
  }
}