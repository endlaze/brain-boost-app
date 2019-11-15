import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcapEFormComponent } from './icap-e-form.component';

describe('IcapEFormComponent', () => {
  let component: IcapEFormComponent;
  let fixture: ComponentFixture<IcapEFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcapEFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcapEFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
