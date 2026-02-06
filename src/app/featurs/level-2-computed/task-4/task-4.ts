import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-task-4',
  imports: [],
  templateUrl: './task-4.html',
  styleUrl: './task-4.css',
})
export class Task4 {
  show = signal(false);
  count = signal(0);
  signalCount = signal(0);

  constructor() {
    effect(() => {
      this.message();
      this.signalCount.update((v) => v + 1);
      console.log('computed сработал: ', this.signalCount());

      untracked(() => {
        console.log('count:', this.count());
      });
    });
  }

  message = computed(() => {
    return this.show() ? `count=${this.count()}` : 'hidden';
  });

  showCount() {
    this.show.set(!this.show());
  }

  increaseCount() {
    this.count.update((v) => v + 1);
  }
}
