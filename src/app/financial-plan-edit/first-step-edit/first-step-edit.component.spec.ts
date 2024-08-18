import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepEditComponent } from './first-step-edit.component';

describe('FirstStepEditComponent', () => {
  let component: FirstStepEditComponent;
  let fixture: ComponentFixture<FirstStepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstStepEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
