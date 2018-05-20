import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsBaseComponent } from './lyrics-base.component';

describe('LyricsBaseComponent', () => {
  let component: LyricsBaseComponent;
  let fixture: ComponentFixture<LyricsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
