import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class SignalComp {
count =  signal(0);

increament(){
  this.count.update(value=>value+1)
}

decreaseCount(){
  this.count.update(value=>value-1)
}
resetCount(){
  this.count.set(0)
}
}
