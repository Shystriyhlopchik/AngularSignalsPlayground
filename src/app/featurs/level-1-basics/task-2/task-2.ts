import { Component, computed, signal, WritableSignal } from '@angular/core';

type TSignal = {
  name: string;
  tags: string[];
};

@Component({
  selector: 'app-task-2',
  imports: [],
  templateUrl: './task-2.html',
  styleUrl: './task-2.css',
})
export class Task2 {
  _profile: WritableSignal<TSignal> = signal({ name: 'John Doe', tags: [] as string[] });
  readonly profile = this._profile.asReadonly();

  computed = computed(() => this.profile().tags.length);

  addTag(): void {
    this.profile().tags.push('new-tag');
  }

  addTagImmutable(): void {
    const profile = this.profile();
    this._profile.set({
      ...profile,
      tags: [...profile.tags, 'new'],
    });
  }
}
