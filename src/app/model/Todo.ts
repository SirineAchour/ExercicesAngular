import { Injectable } from '@angular/core';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class Todo{
  title:String="";
  content:String="";

  constructor(title:String, content:String) {
    this.title = title;
    this.content = content;
  }
}
