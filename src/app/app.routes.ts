import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Task1CounterState } from './featurs/level-1-basics/task-1-counter-state/task-1-counter-state';
import { Task2 } from './featurs/level-1-basics/task-2/task-2';
import { Task3 } from './featurs/level-2-computed/task-3/task-3';
import { Task4 } from './featurs/level-2-computed/task-4/task-4';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'task-1',
    component: Task1CounterState,
  },
  {
    path: 'task-2',
    component: Task2,
  },
  {
    path: 'task-3',
    component: Task3,
  },
  {
    path: 'task-4',
    component: Task4,
  },
];
