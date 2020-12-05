import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../../../model/personne';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  //@Output() sendPersonne = new EventEmitter();
  constructor(private cvService : CvService) {}

  ngOnInit(): void {}
  selectItem() {
    //this.sendPersonne.emit(this.personne);
    this.cvService.selectPerson(this.personne);
  }
}
