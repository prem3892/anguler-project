import { Component } from '@angular/core';
import { HeroBanner } from "../heroBanner/heroBanner";
import { ProductCart } from "../product-cart/product-cart";
import { Productcategories } from "../productcategories/productcategories";
import { SignalComp } from "../signal/signal";
import { Hero } from "../hero/hero";
import { ProductSwiper } from "../product-swiper/product-swiper";

@Component({
  selector: 'app-home',
  imports: [HeroBanner, ProductCart, Productcategories, SignalComp, Hero, ProductSwiper],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
