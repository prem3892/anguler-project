import { HeroBanner } from './heroBanner/heroBanner';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topticker } from './topticker/topticker';
import { Header } from './header/header';
import { Footer } from "./footer/footer";
import { ProductCart } from './product-cart/product-cart';
import { Productcategories } from './productcategories/productcategories';
import { SignalComp } from './signal/signal';
import { GoToTop } from './go-to-top/go-to-top';
import { Hero } from './hero/hero';
import { ProductSwiper } from './product-swiper/product-swiper';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topticker, Header, Footer, HeroBanner, ProductCart, Productcategories, SignalComp, GoToTop, Hero, ProductSwiper],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anguler-project');
}
