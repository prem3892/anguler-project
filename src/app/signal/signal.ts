import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [NgClass],
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

color =  signal("text-red-500");

handleClick(){
  this.color.set("text-green-500")
}

handleUpdate(){
  this.color.update(c=>c==="text-red-500" ? "text-green-500": "text-red-500")
}

}
