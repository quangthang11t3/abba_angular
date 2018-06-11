import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDepositComponent } from './btn-deposit.component';

describe('BtnDepositComponent', () => {
  let component: BtnDepositComponent;
  let fixture: ComponentFixture<BtnDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
