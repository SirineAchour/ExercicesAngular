import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public personnes: Personne[] = [];
  //@Output() forwardSelectedPersonne = new EventEmitter(); NO LONGER NEED THIS 5ATR SUBJECT

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    const ob = this.cvService.getPersonnesHttpObservable()
    this.personnes = this.cvService.getPersonnes()
    ob.subscribe(
      (people) => {
        console.log(people)
        this.personnes = people
      }
    )
  }
  /*
  forwardPersonne(selectedPersonne: Personne) {
    this.forwardSelectedPersonne.emit(selectedPersonne);
  }*/
}
