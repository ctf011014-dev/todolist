import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Component({
    selector: 'app-todolist',
    templateUrl: './todoList.component.html',
    styleUrls: ['./todoList.component.css']
})
export class TodoListComponent {
    tasks: string[] = ['Coffee', 'Breakfast'];
    addCnt = 0;

    add(taskName: string): void {
        let t: string;
        t = taskName.trim();

        if (!taskName) {
            return;
        }
        this.tasks.push(t);
        this.addCnt++;
    }
}
