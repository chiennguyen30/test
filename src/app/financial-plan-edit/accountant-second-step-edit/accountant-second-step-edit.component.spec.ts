import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantSecondStepEditComponent } from './accountant-second-step-edit.component';

describe('AccountantSecondStepEditComponent', () => {
  let component: AccountantSecondStepEditComponent;
  let fixture: ComponentFixture<AccountantSecondStepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountantSecondStepEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantSecondStepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
