import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatecustomersComponent } from './admin-updatecustomers.component';

describe('AdminUpdatecustomersComponent', () => {
  let component: AdminUpdatecustomersComponent;
  let fixture: ComponentFixture<AdminUpdatecustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdatecustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdatecustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
