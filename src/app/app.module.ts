import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowInputDirectiveDirective } from './rainbow/rainbow-input-directive.directive';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo } from './model/Todo';
import { EmbaucheComponent } from './embauche/embauche.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { CvComponent } from './cv/pages/cv/cv.component';
import { ListComponent } from './cv/components/list/list.component';
import { DetailComponent } from './cv/components/detail/detail.component';
import { ItemComponent } from './cv/components/item/item.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';

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
    DefaultImagePipe
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
