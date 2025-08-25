import { Component } from '@angular/core';
import { data } from './types';
import { HeaderData } from './variants';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class Header {
  getheaderdata:data=HeaderData;
}
