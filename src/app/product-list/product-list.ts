import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../pipes/sort-pipe';
import { Products } from '../services/products';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  selectedProduct: Product | undefined;
  products$: Observable<Product[]> | undefined;

  constructor(private productService: Products) {}
  
  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }
  
}