import { Component, signal } from '@angular/core';
import { data } from './types';
import { productSwiper } from './variants';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-product-swiper',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './product-swiper.html',
  styleUrl: './product-swiper.css'
})
export class ProductSwiper {
  getData:data = productSwiper;

  color = signal('text-white');

  changeColor(){
    this.color.set("text-red-500")
    alert("Clicked")
  }
}
