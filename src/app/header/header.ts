import { Component } from '@angular/core';
import { data, HeaderDataNew } from './types';
import { HeaderData, headerDataNew} from './variants';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, FaIconComponent],
  templateUrl: './header.html',
})
export class Header {
  getheaderdata:data=HeaderData;
  getheaderdatanew:HeaderDataNew=headerDataNew;
  focusSearch(input: HTMLInputElement) {
    input.focus();
  }
}
