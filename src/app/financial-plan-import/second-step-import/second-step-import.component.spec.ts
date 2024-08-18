import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepImportComponent } from './second-step-import.component';

describe('SecondStepImportComponent', () => {
  let component: SecondStepImportComponent;
  let fixture: ComponentFixture<SecondStepImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondStepImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondStepImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
