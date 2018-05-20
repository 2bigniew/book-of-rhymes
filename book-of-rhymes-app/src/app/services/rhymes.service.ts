import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RhymesService {

  private rhymesPages: Array<string>;
  private rhyme: string;

  private rhymesPageObs = new BehaviorSubject<Array<string>>([]);

  constructor() {
    this.rhymesPages = ['First', 'Second', 'Third'];
    this.rhymesPageObs.next(this.rhymesPages);
  }

  getRhymesPageObs(): Observable<Array<string>> {
    return this.rhymesPageObs.asObservable();
  }

  deletePage(page): void {
    this.rhymesPages = this.rhymesPages.filter(x => x !== page);
    this.rhymesPageObs.next(this.rhymesPages);
  }

  addRhymePage(page) {
    this.rhymesPages.push(page);
    this.rhymesPageObs.next(this.rhymesPages);
  }
}
