import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
import { TodoManagerService } from './../todo-manager/todo-manager.service';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  title:String='';
  content:String='';

  constructor(private todoService:TodoManagerService) {

    this.todos = this.todoService.getTodos();
   }

  ngOnInit(): void {
  }

  add(){
    console.log(this.content);
    this.todoService.addTodo(this.title,this.content);
  }
  delete(title:String, content:String){
    this.todoService.removeTodo(title,content)
  }
}
