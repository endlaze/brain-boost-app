import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICAPBPage } from './icap-b.page';

describe('ICAPBPage', () => {
  let component: ICAPBPage;
  let fixture: ComponentFixture<ICAPBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICAPBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
