import { Component, Input } from '@angular/core';
import { TaskType } from '../TaskType';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: TaskType;
}
