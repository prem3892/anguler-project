import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topticker } from './topticker/topticker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topticker ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anguler-project');

  data(){
    console.log(10)
  }
}
