import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Products } from '../services/products';
import { FavoritesService } from '../services/favorites-service';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
  providers: [
    {provide: Products, useClass: FavoritesService}
  ]
})
export class Favorites implements OnInit{
  products : Product[] = []
  constructor(private productService : Products){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
