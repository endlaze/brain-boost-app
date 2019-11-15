import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/components/add-app/add-app.component.spec.ts
import { AddAppComponent } from './add-app.component';

describe('AddAppComponent', () => {
  let component: AddAppComponent;
  let fixture: ComponentFixture<AddAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppComponent ],
=======
import { ICAPAFormComponent } from './icap-a-form.component';

describe('ICAPAFormComponent', () => {
  let component: ICAPAFormComponent;
  let fixture: ComponentFixture<ICAPAFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPAFormComponent ],
>>>>>>> develop:src/app/components/icap-a-form/icap-a-form.component.spec.ts
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/components/add-app/add-app.component.spec.ts
    fixture = TestBed.createComponent(AddAppComponent);
=======
    fixture = TestBed.createComponent(ICAPAFormComponent);
>>>>>>> develop:src/app/components/icap-a-form/icap-a-form.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
