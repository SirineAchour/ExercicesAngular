import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { RainbowInputDirectiveDirective } from './rainbow-input-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    RainbowInputDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
