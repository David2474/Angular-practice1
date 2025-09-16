import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = signal(10);

  increaseBy(value: number = 1){
    this.counter.update( current => current + 1);
  }

  decreaseBy(value: number = 1){
    this.counter.update( current => current -1);
  }

  constructor() {

    let savedValue = localStorage.getItem("counterValue")
    if(savedValue){
      this.counter.set(Number(savedValue))
    }

    effect(() =>{
      console.log("changed value", this.counter());
      localStorage.setItem("counterValue", this.counter().toString());
    });
  }
 }
