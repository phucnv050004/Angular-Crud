import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TProduct } from '../interfaces/TProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) {}

  getProducts():Observable<TProduct[]>{
    return this.http.get<TProduct[]>(`http://localhost:3000/products`);
  }
  getProductById(id:number):Observable<TProduct>{
    return this.http.get<TProduct>(`http://localhost:3000/products/${id}`);
  }
  addProduct(product:TProduct):Observable<TProduct>{
    return this.http.post<TProduct>(`http://localhost:3000/products`,product);
  }
  removeProduct(id:number):Observable<TProduct | {}>{
    return this.http.delete<TProduct | {}>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product:TProduct):Observable<TProduct>{
    return this.http.put<TProduct>(`http://localhost:3000/products/${product.id}`,product);
  }
}
