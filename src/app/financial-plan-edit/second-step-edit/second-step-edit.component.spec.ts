import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepEditComponent } from './second-step-edit.component';

describe('SecondStepEditComponent', () => {
  let component: SecondStepEditComponent;
  let fixture: ComponentFixture<SecondStepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondStepEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondStepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
