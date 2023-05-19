import { Injectable } from '@angular/core';
import { TaskList } from '../TaskList';
import { TaskType } from '../TaskType';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  getTasks(): Observable<TaskType[]> {
    const tasks = of(TaskList);
    return tasks;
  }
}
