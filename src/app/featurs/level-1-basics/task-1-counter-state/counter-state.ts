import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterState {
  private _count = signal(0);
  readonly count = this._count.asReadonly();

  inc(): void {
    this._count.update((v) => v + 1);
  }

  dec(): void {
    this._count.update((v) => v - 1);
  }

  res(): void {
    this._count.set(0);
  }
}
