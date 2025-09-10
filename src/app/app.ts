import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topticker } from './topticker/topticker';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from "./footer/footer";
import { ProductCart } from './product-cart/product-cart';
import { Productcategories } from './productcategories/productcategories';
// import { SignalComp } from './signal/signal';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topticker, Header, Footer, Home, ProductCart, Productcategories],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anguler-project');
}
