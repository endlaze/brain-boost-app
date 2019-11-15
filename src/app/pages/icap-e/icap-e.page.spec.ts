import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcapEPage } from './icap-e.page';

describe('IcapEPage', () => {
  let component: IcapEPage;
  let fixture: ComponentFixture<IcapEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcapEPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcapEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
