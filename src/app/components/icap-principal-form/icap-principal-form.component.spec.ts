import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/pages/recommended-apps/recommended-apps.page.spec.ts
import { RecommendedAppsPage } from './recommended-apps.page';

describe('RecommendedAppsPage', () => {
  let component: RecommendedAppsPage;
  let fixture: ComponentFixture<RecommendedAppsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedAppsPage ],
=======
import { ICAPPrincipalFormComponent } from './icap-principal-form.component';

describe('ICAPPrincipalFormComponent', () => {
  let component: ICAPPrincipalFormComponent;
  let fixture: ComponentFixture<ICAPPrincipalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICAPPrincipalFormComponent ],
>>>>>>> develop:src/app/components/icap-principal-form/icap-principal-form.component.spec.ts
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/pages/recommended-apps/recommended-apps.page.spec.ts
    fixture = TestBed.createComponent(RecommendedAppsPage);
=======
    fixture = TestBed.createComponent(ICAPPrincipalFormComponent);
>>>>>>> develop:src/app/components/icap-principal-form/icap-principal-form.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
