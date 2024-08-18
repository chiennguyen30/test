import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepImportComponent } from './first-step-import.component';

describe('FirstStepImportComponent', () => {
  let component: FirstStepImportComponent;
  let fixture: ComponentFixture<FirstStepImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstStepImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStepImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
