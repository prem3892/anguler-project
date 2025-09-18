import { Component, signal } from '@angular/core';
import { data } from './types';
import { productSwiper } from './variants';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-swiper',
  standalone: true,
  imports: [FaIconComponent, NgClass],
  templateUrl: './product-swiper.html',
  styleUrl: './product-swiper.css'
})
export class ProductSwiper {
  getData: data = productSwiper;

  // har card ke liye ek state
  liked = signal<boolean[]>(this.getData.card.map(() => false));

  changeColor(index: number) {
    const current = [...this.liked()];
    current[index] = !current[index]; // toggle karega
    this.liked.set(current);
  }

  color(index: number) {
    return this.liked()[index] ? 'text-red-500' : 'text-white';
  }
}