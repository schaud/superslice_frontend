import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainPizzaComponent } from './plain-pizza.component';

describe('PlainPizzaComponent', () => {
  let component: PlainPizzaComponent;
  let fixture: ComponentFixture<PlainPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
