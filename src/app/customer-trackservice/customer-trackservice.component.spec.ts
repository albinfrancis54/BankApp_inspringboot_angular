import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTrackserviceComponent } from './customer-trackservice.component';

describe('CustomerTrackserviceComponent', () => {
  let component: CustomerTrackserviceComponent;
  let fixture: ComponentFixture<CustomerTrackserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTrackserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTrackserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
