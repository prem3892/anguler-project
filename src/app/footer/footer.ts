import { Component } from '@angular/core';
import { footerData } from './variants';
import { data } from './types';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  getfooterdata:data = footerData;

  onButtonCLick(){
    alert("Hi");
  }

}

