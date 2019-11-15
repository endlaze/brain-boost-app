import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICAPCPage } from './icap-c.page';

describe('ICAPCPage', () => {
  let component: ICAPCPage;
  let fixture: ComponentFixture<ICAPCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICAPCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
