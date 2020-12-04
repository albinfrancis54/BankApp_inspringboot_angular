import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagecustomersComponent } from './admin-managecustomers.component';

describe('AdminManagecustomersComponent', () => {
  let component: AdminManagecustomersComponent;
  let fixture: ComponentFixture<AdminManagecustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagecustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagecustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
