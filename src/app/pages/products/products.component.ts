import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  loading: boolean = true;

  productList: IProduct[] = [];

  private _route = inject(Router);
  private _apiService = inject(ApiService);

  totalImages: number = 0;
  loadedImages: number = 0;

  ngOnInit(): void {
  this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
    this.productList = data;
    console.log(data)
    this.loading = false;

    this.totalImages = this.productList.length;

    
  })}
  
  onImageLoad() {
    this.loadedImages++;
  
    if (this.loadedImages === this.totalImages) {
      // Ya cargaron todas las imágenes
      this.loading = false;
    }
  }

  onImageError(event: Event) {
    // Imagen fallida: contala igual
    this.loadedImages++;
  
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/placeholder.png'; // Imagen por defecto si falla
  
    if (this.loadedImages === this.totalImages) {
      this.loading = false;
    }
  }
  navegate(id: number){
    this._route.navigate(['/products', id]);
    console.log(id);    
  }

}
