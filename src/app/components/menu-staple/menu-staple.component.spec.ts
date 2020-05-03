import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStapleComponent } from './menu-staple.component';

describe('MenuStapleComponent', () => {
  let component: MenuStapleComponent;
  let fixture: ComponentFixture<MenuStapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
