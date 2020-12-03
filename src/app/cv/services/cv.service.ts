import { Injectable } from '@angular/core';
import { Personne } from '../../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[] = [];
  constructor() {
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
  }

  getPersonnes(): Personne[] {
    return this.personnes
  }
}
