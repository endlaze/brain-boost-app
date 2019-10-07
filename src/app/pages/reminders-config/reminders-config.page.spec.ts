import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersConfigPage } from './reminders-config.page';

describe('RemindersConfigPage', () => {
  let component: RemindersConfigPage;
  let fixture: ComponentFixture<RemindersConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersConfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
