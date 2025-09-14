import { Component } from '@angular/core';
import { heroData } from './variants';
import { data } from './types';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-hero',
  imports: [FaIconComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  getherodata:data = heroData;
}
