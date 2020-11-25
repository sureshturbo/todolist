import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
@Input('taskList') taskList:any;
   newtask: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  addtodo(){
     this.taskList.unshift(this.newtask);
      localStorage.setItem('my_task',JSON.stringify(this.taskList))
      this.newtask='';
  }
 
}
