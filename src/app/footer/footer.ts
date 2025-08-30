import { Component } from '@angular/core';
import { footerData } from './variants';
import { data } from './types';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  getfooterdata:data = footerData
}
