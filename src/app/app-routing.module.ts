import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/pages/cv/cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';


const routes: Routes = [
  { path: 'embauche', component: EmbaucheComponent },
  { path: '', component: CvComponent },
  { path: 'todo', component: TodoListComponent},
  { path: 'rainbow', component: RainbowComponent},
  { path: 'observable', component: TestObservableComponent},
];

export const ROUTING = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
