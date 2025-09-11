import { Component } from '@angular/core';
import { data } from './types';
import { productcategoriesdata } from './variants';

@Component({
  selector: 'app-productcategories',
  imports: [],
  templateUrl: './productcategories.html',
  styleUrl: './productcategories.css'
})

export class Productcategories {
  getdata:data = productcategoriesdata
}
