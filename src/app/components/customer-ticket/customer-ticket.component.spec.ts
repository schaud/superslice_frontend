import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketComponent } from './customer-ticket.component';

describe('CustomerTicketComponent', () => {
  let component: CustomerTicketComponent;
  let fixture: ComponentFixture<CustomerTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
