import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() images: string[] = [];
  @Output() close = new EventEmitter<void>();

  currentIndex: number = 0; 

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }


  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  closeCarousel() {
    this.close.emit();
    console.log("Carousel closed !");
  }
}