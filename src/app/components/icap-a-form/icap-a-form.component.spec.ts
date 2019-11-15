import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICAPAFormComponent } from './icap-a-form.component';

describe('ICAPAFormComponent', () => {
  let component: ICAPAFormComponent;
  let fixture: ComponentFixture<ICAPAFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPAFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICAPAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
