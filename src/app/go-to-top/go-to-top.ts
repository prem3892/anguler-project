import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-to-top',
  imports: [],
  templateUrl: './go-to-top.html',
  styleUrl: './go-to-top.css'
})
export class GoToTop implements OnInit,OnDestroy {
visible = false;

  // Scroll event handler
   handleScroll = () => {
    this.visible = scrollY > 200;
  };

  ngOnInit(): void {

    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy(): void {

    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
