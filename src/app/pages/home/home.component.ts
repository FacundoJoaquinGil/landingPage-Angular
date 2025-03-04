import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { BestProductComponent } from "../best-product/best-product.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, CarouselComponent, BestProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
