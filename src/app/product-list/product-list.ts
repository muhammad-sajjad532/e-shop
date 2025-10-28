import { Component, OnInit, inject} from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../pipes/sort-pipe';
import { Products } from '../services/products';
import { Favorites } from '../favorites/favorites';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe, Favorites],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  providers: [Products]
})
export class ProductList implements OnInit{

   products : Product[] = [];
   selectedProduct : Product | undefined;

  private productService = inject(Products);
  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  onAdded(product : Product){
    alert(`${product.title} added to the cart!`);
  }
}
