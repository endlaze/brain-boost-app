import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICAPFormPage } from './icap-form.page';

describe('ICAPFormPage', () => {
  let component: ICAPFormPage;
  let fixture: ComponentFixture<ICAPFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICAPFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
