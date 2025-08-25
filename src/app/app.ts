import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topticker } from './topticker/topticker';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topticker, Header],

  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anguler-project');
}
