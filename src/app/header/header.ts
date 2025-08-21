import { Component } from '@angular/core';
import { data } from './types';
import { HeaderData } from './variants';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  getheaderdata:data=HeaderData;
}
