import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowInputDirectiveDirective } from './rainbow/rainbow-input-directive.directive';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { Todo } from './model/Todo';
import { EmbaucheComponent } from './embauche/embauche.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { ListComponent } from './cv/components/list/list.component';
import { DetailComponent } from './cv/components/detail/detail.component';
import { ItemComponent } from './cv/components/item/item.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RainbowInputDirectiveDirective,
    TodoListComponent,
    EmbaucheComponent,
    RainbowComponent,
    RouterSimulatorComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    DefaultImagePipe,
    TestObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
