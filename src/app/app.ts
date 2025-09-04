import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topticker } from './topticker/topticker';
import { Header } from './header/header';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Topticker, Header, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anguler-project');
}
