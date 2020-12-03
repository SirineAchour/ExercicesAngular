import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {

  path = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.path = "-"
  }

  navigate(){
    console.log(this.path)
    if ( ! this.path.startsWith("-")){
    this.router.navigate([this.path])
    }
  }

}
