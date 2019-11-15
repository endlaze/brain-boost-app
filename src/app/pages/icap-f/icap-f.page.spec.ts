import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcapFPage } from './icap-f.page';

describe('IcapFPage', () => {
  let component: IcapFPage;
  let fixture: ComponentFixture<IcapFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcapFPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcapFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
