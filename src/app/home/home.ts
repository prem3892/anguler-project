import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderVariants } from './variants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy {
  currentIndex = 0;
  images: string[] = [];
  intervalId: number | undefined;

  ngOnInit() {
    this.updateImages();
    window.addEventListener('resize', this.updateImages.bind(this));

    // Auto slide every 3 sec
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateImages.bind(this));

    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }

  updateImages() {
    if (window.innerWidth < 640) {
      this.images = SliderVariants['mobile'].images;
    } else {
      this.images = SliderVariants['desktop'].images;
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
