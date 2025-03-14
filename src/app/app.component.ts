import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { BestProductComponent } from './pages/best-product/best-product.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule,
    RouterLink,
    CarouselComponent,
    BestProductComponent,
    BenefitsComponent,
    AboutUsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landingPage';
}
