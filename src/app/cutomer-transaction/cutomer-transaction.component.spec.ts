import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerTransactionComponent } from './cutomer-transaction.component';

describe('CutomerTransactionComponent', () => {
  let component: CutomerTransactionComponent;
  let fixture: ComponentFixture<CutomerTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
