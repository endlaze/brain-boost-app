import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICAPCFormComponent } from './icap-c-form.component';

describe('ICAPCFormComponent', () => {
  let component: ICAPCFormComponent;
  let fixture: ComponentFixture<ICAPCFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPCFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICAPCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
