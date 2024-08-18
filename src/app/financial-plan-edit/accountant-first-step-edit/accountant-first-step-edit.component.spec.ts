import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantFirstStepEditComponent } from './accountant-first-step-edit.component';

describe('AccountantFirstStepEditComponent', () => {
  let component: AccountantFirstStepEditComponent;
  let fixture: ComponentFixture<AccountantFirstStepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountantFirstStepEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountantFirstStepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
