import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlltransactionsComponent } from './admin-alltransactions.component';

describe('AdminAlltransactionsComponent', () => {
  let component: AdminAlltransactionsComponent;
  let fixture: ComponentFixture<AdminAlltransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlltransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlltransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
