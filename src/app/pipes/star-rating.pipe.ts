import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(value: number | null | undefined, maxStars: number = 5): string {
    // Si el valor es undefined, null o no es un número válido, devuelve estrellas vacías
    if (value === null || value === undefined || isNaN(value) || value < 0) {
      return '⭐'.repeat(maxStars); // Todas vacías
    }

    const validValue = Math.min(value, maxStars); // Evita que el valor sea mayor al máximo permitido
    const filledStars = '⭐'.repeat(validValue); // Estrellas llenas
    const emptyStars = ''.repeat(maxStars - validValue); // Estrellas vacías
    
    return filledStars + emptyStars;
  }
}
