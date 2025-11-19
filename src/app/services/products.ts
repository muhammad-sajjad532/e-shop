import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product';
import { APP_SETTINGS } from '../app.settings';


@Injectable({
  providedIn: 'root'
})
export class Products {

  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';
  private products: Product[] = [];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const options = new HttpParams()
    .set('limit', 10)
    .set('page', 1);
    return this.http.get<Product[]>(this.productsUrl, { params: options });
  }

  getProduct(id: number): Observable<Product> {
  return this.http.get<Product>(`${this.productsUrl}/${id}`);
 }
  
}