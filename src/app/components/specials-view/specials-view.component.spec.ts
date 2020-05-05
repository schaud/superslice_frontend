import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsViewComponent } from './specials-view.component';

describe('SpecialsViewComponent', () => {
  let component: SpecialsViewComponent;
  let fixture: ComponentFixture<SpecialsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
