import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlibComponent } from './newlib.component';

describe('NewlibComponent', () => {
  let component: NewlibComponent;
  let fixture: ComponentFixture<NewlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
