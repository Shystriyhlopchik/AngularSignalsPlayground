import { Component, computed, inject, OnInit } from '@angular/core';
import { CounterState } from './counter-state';

@Component({
  selector: 'app-counter-state',
  imports: [],
  templateUrl: './task-1-counter-state.html',
  styleUrl: './task-1-counter-state.css',
})
export class Task1CounterState {
  state = inject(CounterState);

  increment(): void {
    this.state.inc();
  }
  decrement(): void {
    this.state.dec();
  }
  reset(): void {
    this.state.res();
  }

  doubleCounter(): number {
    return computed(() => this.state.count() * 2)();
  }
}
