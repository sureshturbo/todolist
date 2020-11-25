import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
 
  title = 'my task';      /*data binding*/
  taskList: string[] =[]
  
  ngOnInit(): void {
    if (localStorage.getItem('my_task')) {
      
        this.taskList = JSON.parse(localStorage.getItem('my_task'))


    }
  }
}

