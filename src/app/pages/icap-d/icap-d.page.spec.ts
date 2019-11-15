import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcapDPage } from './icap-d.page';

describe('IcapDPage', () => {
  let component: IcapDPage;
  let fixture: ComponentFixture<IcapDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcapDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcapDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
