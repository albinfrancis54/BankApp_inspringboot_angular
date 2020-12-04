import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyprofileComponent } from './customer-myprofile.component';

describe('CustomerMyprofileComponent', () => {
  let component: CustomerMyprofileComponent;
  let fixture: ComponentFixture<CustomerMyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
