import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 @Input('tasks')tasks:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  removetask(index : number){
    this.tasks.splice(index ,1)
    localStorage.setItem('my_task',JSON.stringify(this.tasks))
  }
}
