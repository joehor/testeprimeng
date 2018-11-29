import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictAreaComponent } from './restrict-area.component';

describe('RestrictAreaComponent', () => {
  let component: RestrictAreaComponent;
  let fixture: ComponentFixture<RestrictAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
