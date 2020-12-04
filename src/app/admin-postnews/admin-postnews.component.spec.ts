import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostnewsComponent } from './admin-postnews.component';

describe('AdminPostnewsComponent', () => {
  let component: AdminPostnewsComponent;
  let fixture: ComponentFixture<AdminPostnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
