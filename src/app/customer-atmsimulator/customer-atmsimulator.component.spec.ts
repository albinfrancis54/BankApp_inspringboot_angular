import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAtmsimulatorComponent } from './customer-atmsimulator.component';

describe('CustomerAtmsimulatorComponent', () => {
  let component: CustomerAtmsimulatorComponent;
  let fixture: ComponentFixture<CustomerAtmsimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAtmsimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAtmsimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
