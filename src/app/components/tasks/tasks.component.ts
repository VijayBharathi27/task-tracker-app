import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/TaskList';
import { TaskType } from 'src/app/TaskType';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskType[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
