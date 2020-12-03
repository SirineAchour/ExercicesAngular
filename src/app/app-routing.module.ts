import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/pages/cv/cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  { path: 'embauche', component: EmbaucheComponent },
  { path: '', component: CvComponent },
  { path: 'todo', component: TodoListComponent},
  { path: 'rainbow', component: RainbowComponent},
];

export const ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
