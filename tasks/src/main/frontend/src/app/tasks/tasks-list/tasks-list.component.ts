import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from '../task.model';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.getTasks();
        this.taskService.onTaskAdded.subscribe(
            (task: Task) => this.tasks.push(task)
        );
    }

    getTasks(): void {
        this.taskService.getTasks()
            .subscribe(tasks => (this.tasks = tasks));
    }

    getDueDateLabel(task: Task) {
        return task.completed ? 'alert-success' : 'alert-primary';
    }

    onTaskChange(event, task) {
        this.taskService.saveTask(task, event.target.checked).subscribe();

    }

}
