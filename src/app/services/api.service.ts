import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://fakestoreapi.com/products';
  private _http = inject(HttpClient);

  getAllProducts():Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url);
  }

  getProduct(id: number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.url}/${id}`);
  }
}
