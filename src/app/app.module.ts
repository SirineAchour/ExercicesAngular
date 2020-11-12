import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RainbowInputDirectiveDirective } from './rainbow-input-directive.directive';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo } from './model/Todo';

@NgModule({
  declarations: [
    AppComponent,
    //RainbowInputDirectiveDirective,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
