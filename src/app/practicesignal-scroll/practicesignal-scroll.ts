import { NgClass } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-practicesignal-scroll',
  imports: [NgClass],
  templateUrl: './practicesignal-scroll.html',
  styleUrl: './practicesignal-scroll.css'
})
export class PracticesignalScroll implements OnInit, OnDestroy {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1)
  }

  decrement() {
    this.count.update(value => value - 1)
  }

  reset() {
    this.count.set(0)
  }

  color = signal("bg-red-600")

  changeColor() {
    this.color.set("bg-green-500")
  }

  toggleColor() {
    this.color.update(value => value === "bg-red-600" ? "bg-green-500" : "bg-red-600"
    )
  }

  displayButton = false;

  @HostListener('window:scroll', [])
  
  handleScroll() {
    this.displayButton = scrollY > 300;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  backToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
