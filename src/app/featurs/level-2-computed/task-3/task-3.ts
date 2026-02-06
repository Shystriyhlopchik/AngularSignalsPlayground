import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

type Item = { id: number; title: string };

function generateItems(count: number): Item[] {
  const words = ['Angular', 'Signals', 'Computed', 'Memo', 'Filter', 'Search'];
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const w1 = words[id % words.length];
    const w2 = words[(id * 3) % words.length];
    return { id, title: `${w1} ${w2} item #${id}` };
  });
}

@Component({
  selector: 'app-task-3',
  imports: [],
  templateUrl: './task-3.html',
  styleUrl: './task-3.css',
})
export class Task3 {
  readonly items = signal<Item[]>(generateItems(2000));
  readonly query = signal('');

  readonly recomputeCount = signal(0);

  // ❗TODO: сделать computed filtered
  // Требования:
  // - Внутри увеличивать recomputeCount (update +1)
  // - Фильтрация по query (case-insensitive)
  // - Если query пустая => вернуть исходный список items()
  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();

    if (q === '') {
      return this.items();
    }

    return this.items().filter((item) => item.title.toLowerCase().includes(q));
  });

  constructor() {
    effect(() => {
      this.filtered();
      this.recomputeCount.update((n) => n + 1);
    });
  }

  setQuery(v: string) {
    this.query.set(v);
  }

  replaceItems() {
    this.items.set([...this.items().reverse()]);
  }

  trackById = (_: number, it: Item) => it.id;

  reading() {
    // ❗TODO: обратите внимание на recomputeCount. Счетчик не меняется.
    console.log('обратите внимание на recomputeCount. Счетчик не меняется.');
    console.log(this.filtered());
  }
}
