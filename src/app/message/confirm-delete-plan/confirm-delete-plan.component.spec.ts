import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePlanComponent } from './confirm-delete-plan.component';

describe('ConfirmDeletePlanComponent', () => {
  let component: ConfirmDeletePlanComponent;
  let fixture: ComponentFixture<ConfirmDeletePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeletePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeletePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
