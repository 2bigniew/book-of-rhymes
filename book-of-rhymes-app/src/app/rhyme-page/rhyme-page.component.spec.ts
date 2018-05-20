import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhymePageComponent } from './rhyme-page.component';

describe('RhymePageComponent', () => {
  let component: RhymePageComponent;
  let fixture: ComponentFixture<RhymePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhymePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhymePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
