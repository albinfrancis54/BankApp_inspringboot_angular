import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactusComponent } from './customer-contactus.component';

describe('CustomerContactusComponent', () => {
  let component: CustomerContactusComponent;
  let fixture: ComponentFixture<CustomerContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
