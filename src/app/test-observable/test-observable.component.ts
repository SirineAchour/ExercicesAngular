import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  constructor() { }

  paths = ['404.png', 'a1.png', 'a2.png', 'a3.png'];

  observable: Observable<any>;
  imageObservable: Observable<string>;

  ngOnInit(): void {

    this.observable = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.error("c bon !i");
        }
        observer.next(i--);
      }, 1000);
    });

    this.observable.subscribe((val) => {
      console.log(val);
    },
      (erreur) => console.log(erreur),
      () => console.log('flux finalisé'));

    this.observable.pipe(
      map(x => x * 3),
      filter(x =>  x % 2 === 0)
    ).subscribe((val) => {
      console.log("piped stuff : " + val);
    },
      (erreur) => console.log(erreur),
      () => console.log('flux finalisé'));

    this.observable.subscribe(
      (data) =>
        console.log(
          'cc je suis le second observer et voici ce que j ai recu' + data
        ),
      (erreur) => console.log(erreur),
      () => console.log('flux finalisé')
    );

    this.imageObservable = new Observable<string>((observer) => {
      let indice = this.paths.length - 1;
      setInterval(() => {
        if (indice < 0) {
          indice = this.paths.length - 1;
        }
        observer.next(this.paths[indice--]);
      }, 1000);
    });
  }
}
