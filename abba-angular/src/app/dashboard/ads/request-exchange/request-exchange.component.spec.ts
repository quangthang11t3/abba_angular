import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestExchangeComponent } from './request-exchange.component';

describe('RequestExchangeComponent', () => {
  let component: RequestExchangeComponent;
  let fixture: ComponentFixture<RequestExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
