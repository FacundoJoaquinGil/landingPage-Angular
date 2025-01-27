import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  pruductList: IProduct[] = [];
 

  private _apiService = inject(ApiService);

  ngOnInit(): void {
  this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
    this.pruductList = data;
    console.log(data)
  })}

  navegate(id: number){
    console.log(id);
  }

}
