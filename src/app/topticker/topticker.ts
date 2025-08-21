import { Component } from '@angular/core';
import { data } from './types';
import { toptickersdata } from './variants';

@Component({
  selector: 'app-topticker',
  imports: [],
  templateUrl: './topticker.html',
  styleUrl: './topticker.css'
})
export class Topticker {

  gettoptickersdata:data= toptickersdata;

}
