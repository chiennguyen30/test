import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteTermComponent } from './confirm-delete-term.component';

describe('ConfirmDeleteTermComponent', () => {
  let component: ConfirmDeleteTermComponent;
  let fixture: ComponentFixture<ConfirmDeleteTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteTermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
