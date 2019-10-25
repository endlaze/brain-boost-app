import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalNotesPage } from './medical-notes.page';

describe('MedicalNotesPage', () => {
  let component: MedicalNotesPage;
  let fixture: ComponentFixture<MedicalNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalNotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
