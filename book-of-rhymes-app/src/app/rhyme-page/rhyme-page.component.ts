import { RhymesService } from './../services/rhymes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rhyme-page',
  templateUrl: './rhyme-page.component.html',
  styleUrls: ['./rhyme-page.component.css']
})
export class RhymePageComponent implements OnInit {

  @Input()
  private pageTitle: string;

  @Input()
  private pageIndex: string;

  rhymesPage: Array<string> = [];
  rhyme = '';

  constructor(private rhymesService: RhymesService) { }

  ngOnInit() {
  }

  addRhyme() {
    this.rhymesPage.push(this.rhyme);
    this.rhyme = '';
    (<HTMLInputElement>document.getElementById('rp-input')).value = '';

  }

  getRhyme(event) {
    this.rhyme = event.target.value;
  }

  deleteRhyme(rhyme) {
    this.rhymesPage = this.rhymesPage.filter(x => x !== rhyme);
  }

  deletePage(page) {
    this.rhymesService.deletePage(page);
    console.log(page);

  }

}
