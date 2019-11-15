import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICAPBFormComponent } from './icap-b-form.component';

describe('ICAPBFormComponent', () => {
  let component: ICAPBFormComponent;
  let fixture: ComponentFixture<ICAPBFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPBFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICAPBFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
