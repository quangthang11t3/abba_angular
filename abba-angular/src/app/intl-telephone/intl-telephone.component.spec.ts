import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlTelephoneComponent } from './intl-telephone.component';

describe('IntlTelephoneComponent', () => {
  let component: IntlTelephoneComponent;
  let fixture: ComponentFixture<IntlTelephoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlTelephoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
