import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalNotesPage } from './add-medical-notes.page';

describe('AddMedicalNotesPage', () => {
  let component: AddMedicalNotesPage;
  let fixture: ComponentFixture<AddMedicalNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicalNotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicalNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
