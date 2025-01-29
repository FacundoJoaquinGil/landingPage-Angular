import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StarRatingPipe } from '../../pipes/star-rating.pipe';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, StarRatingPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  
  public product?: IProduct ;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        console.log(data);
      });
    });
  }
}
