import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://fakestoreapi.com/products';
  private _http = inject(HttpClient);

  getAllProducts():Observable<any> {
    return this._http.get(this.url);
  }

  getProduct(id: number):Observable<any>{
    return this._http.get(`${this.url}/${id}`);
  }
}
