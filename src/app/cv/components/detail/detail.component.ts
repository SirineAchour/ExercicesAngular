import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../../model/personne';
import { EmbaucheService } from '../../../embauche/embauche-service/embauche.service';
import { CvService } from '../../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private cvService: CvService
    ) {}

  ngOnInit(): void {
    this.cvService.subjectSelectedPerson.pipe(distinctUntilChanged()).subscribe(
      (personne) =>  this.personne = personne )
  }
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      alert(`${this.personne.name} est déjà embauché`);
    }
  }
}
