import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inchild1Component } from './inchild1.component';

describe('Inchild1Component', () => {
  let component: Inchild1Component;
  let fixture: ComponentFixture<Inchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
