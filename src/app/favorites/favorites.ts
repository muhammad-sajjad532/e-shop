import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Products } from '../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites implements OnInit{
  products : Product[] = []
  constructor(private productService : Products){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
