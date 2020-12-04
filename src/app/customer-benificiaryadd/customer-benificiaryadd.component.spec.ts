import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBenificiaryaddComponent } from './customer-benificiaryadd.component';

describe('CustomerBenificiaryaddComponent', () => {
  let component: CustomerBenificiaryaddComponent;
  let fixture: ComponentFixture<CustomerBenificiaryaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBenificiaryaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBenificiaryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
