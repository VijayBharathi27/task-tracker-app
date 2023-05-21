import { Injectable } from '@angular/core';
import { TaskList } from '../TaskList';
import { TaskType } from '../TaskType';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://127.0.0.1:5000/api';
  constructor(private _http: HttpClient) {}
  getTasks(): Observable<TaskType[]> {
    // const tasks = of(TaskList);
    // return tasks;
    return this._http.get<TaskType[]>(this.apiUrl);
  }
  deleteTask(task: TaskType): Observable<TaskType[]> {
    return this._http.delete<TaskType[]>(`${this.apiUrl}/${task.id}`);
  }
}
