import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSpecialComponent } from './menu-special.component';

describe('MenuSpecialComponent', () => {
  let component: MenuSpecialComponent;
  let fixture: ComponentFixture<MenuSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
