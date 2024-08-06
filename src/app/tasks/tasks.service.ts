import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { Task } from "./task/task.model";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: Task[] = DUMMY_TASKS;

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string): Task[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(task: Task, userId: string) {
        task.id = new Date().getTime().toString();
        task.userId = userId;
        this.tasks.push(task);
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}