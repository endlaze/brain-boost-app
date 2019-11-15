import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICAPAPage } from './icap-a.page';

describe('ICAPAPage', () => {
  let component: ICAPAPage;
  let fixture: ComponentFixture<ICAPAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICAPAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
