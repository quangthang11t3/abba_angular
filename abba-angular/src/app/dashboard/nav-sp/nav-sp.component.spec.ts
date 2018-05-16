import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSPComponent } from './nav-sp.component';

describe('NavSPComponent', () => {
  let component: NavSPComponent;
  let fixture: ComponentFixture<NavSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
