import { RhymesService } from './../services/rhymes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rhymes-creator',
  templateUrl: './rhymes-creator.component.html',
  styleUrls: ['./rhymes-creator.component.css']
})
export class RhymesCreatorComponent implements OnInit {

  rhymesPages: Array<string> = []; // usunąć po skończeniu komponentu do rymow
  pageName = '';

  constructor(private rhymesService: RhymesService) {
    this.rhymesService.getRhymesPageObs().subscribe((rhymesPagesContent: Array<string>) => {
      this.rhymesPages = rhymesPagesContent;
    });
  }

  ngOnInit() {
  }

  addRhymePage() {
    if (this.pageName !== '') {
      // this.rhymesPages.push(this.pageName);
      this.rhymesService.addRhymePage(this.pageName);
      (<HTMLInputElement>document.getElementById('rhyme-input')).value = '';
      this.pageName = '';
     }

  }

  onInput(event) {
    this.pageName = event.target.value;
  }

}
