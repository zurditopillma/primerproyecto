// rating.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  rating: number = 0; // Calificación actual
  stars: number[] = [1, 2, 3, 4, 5]; // Representación de las estrellas

  highlightStars(index: number): void {
    this.rating = index;
  }

  resetStars(): void {
    // Restablece la calificación a la original (se mantiene la calificación seleccionada)
  }

  setRating(index: number): void {
    this.rating = index;
  }
}
