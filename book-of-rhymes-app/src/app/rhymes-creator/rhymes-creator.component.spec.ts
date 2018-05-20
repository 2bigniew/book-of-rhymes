import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhymesCreatorComponent } from './rhymes-creator.component';

describe('RhymesCreatorComponent', () => {
  let component: RhymesCreatorComponent;
  let fixture: ComponentFixture<RhymesCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhymesCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhymesCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
