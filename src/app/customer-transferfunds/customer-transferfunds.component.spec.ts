import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransferfundsComponent } from './customer-transferfunds.component';

describe('CustomerTransferfundsComponent', () => {
  let component: CustomerTransferfundsComponent;
  let fixture: ComponentFixture<CustomerTransferfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTransferfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransferfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
