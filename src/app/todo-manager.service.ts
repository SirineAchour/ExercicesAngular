import { Inject, Injectable } from '@angular/core';
import { Todo } from './model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {

  private todos:Todo[]=[];
  constructor() {
  }

  getTodos():Todo[]{
    return this.todos;
  }
  addTodo(title,content){
    if(!this.checkIfTodoExists(title,content)){
      this.todos.push(new Todo(title,content));
    }
  }

  removeTodo(title,content){
    for (let index = 0; index < this.todos.length; index++) {
      if( (this.todos[index].title == title) && (this.todos[index].content == content) ){
        this.todos.splice(index, 1);
        return;
      }
    }
  }

  checkIfTodoExists(title,content):boolean{
      for (let index = 0; index < this.todos.length; index++) {
        if( (this.todos[index].title == title) && (this.todos[index].content == content) ){
          return true;
        }
      }
    return false;
  }
}
