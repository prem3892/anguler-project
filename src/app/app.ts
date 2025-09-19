import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topticker } from './topticker/topticker';
import { Header } from './header/header';
import { Footer } from "./footer/footer";

import { GoToTop } from './go-to-top/go-to-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topticker, Header, Footer, GoToTop,],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anguler-project');
}
