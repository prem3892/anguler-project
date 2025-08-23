import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topticker } from './topticker/topticker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faCar, faCoffee, faEye, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topticker, FontAwesomeModule],

  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('anguler-project');
   fa = faCoffee;
   d =  faAngleDoubleRight
   l =  faAngleDoubleLeft
   e =  faEye
   c=   faCar
   h =  faHome

}
