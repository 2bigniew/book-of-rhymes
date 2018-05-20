import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfRhymesComponent } from './book-of-rhymes.component';

describe('BookOfRhymesComponent', () => {
  let component: BookOfRhymesComponent;
  let fixture: ComponentFixture<BookOfRhymesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOfRhymesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOfRhymesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
