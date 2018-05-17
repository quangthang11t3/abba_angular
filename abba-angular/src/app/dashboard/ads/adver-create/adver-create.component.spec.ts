import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverCreateComponent } from './adver-create.component';

describe('AdverCreateComponent', () => {
  let component: AdverCreateComponent;
  let fixture: ComponentFixture<AdverCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
