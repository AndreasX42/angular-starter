import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';
import { User } from '../user/user.model';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private tasksService: TasksService) {}

  @Input() user!: User;
  isAddingTask = false;

  getUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onAddingNewTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }

  

}
