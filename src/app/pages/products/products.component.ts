import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productList: IProduct[] = [];

  private _route = inject(Router);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
  this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
    this.productList = data;
    console.log(data)
  })}

  navegate(id: number){
    this._route.navigate(['/products', id]);
    console.log(id);    
  }

}
