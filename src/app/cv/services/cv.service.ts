import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { Personne } from '../../model/personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  subjectSelectedPerson : Subject<Personne> = new Subject<Personne>()

  constructor( private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'achour', 'sirine', 'student', 'a1.png', 123456789, 22),
      new Personne(2, 'sirine', 'siirine', 'student', 'a2.png', 123456789, 22),
      new Personne(3, 'test1', 'test', 'teacher', 'a3.png', 123456, 22),
      new Personne(4, 'test2', 'test', 'teacher', 'a3.png', 123456, 22),
      new Personne(5, 'test3', 'test', 'teacher', 'a3.png', 123456, 22),
      new Personne(6, 'test4', 'test', 'teacher', 'a3.png', 123456, 22),
      new Personne(7, 'test5', 'test', 'teacher', 'a3.png', 123456, 22),
      new Personne(8, 'test6', 'test', 'teacher', 'a3.png', 123456, 22),
    ];
    const ob = this.getPersonnesHttpObservable()
    ob.subscribe(
      (people) => {
        this.personnes = people
      }
    )
  }


  getPersonnes(): Personne[]{
    console.log(this.personnes)
    return this.personnes
  }

  getPersonnesHttpObservable(): Observable<Personne[]>{
    return this.http.get<Personne[]>('https://immense-citadel-91115.herokuapp.com/api/personnes')
  }

  selectPerson(p : Personne){
    this.subjectSelectedPerson.next(p)
  }
}
