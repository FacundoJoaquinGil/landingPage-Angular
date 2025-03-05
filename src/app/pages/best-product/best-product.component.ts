import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './best-product.component.html',
  styleUrl: './best-product.component.css'
})
export class BestProductComponent {


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
