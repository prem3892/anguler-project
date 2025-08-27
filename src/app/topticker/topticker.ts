import { Component } from '@angular/core';
import { data } from './types';
import { toptickersdata } from './variants';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-topticker',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './topticker.html',
})
export class Topticker {

  gettoptickersdata:data= toptickersdata;

}

