import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEndTermComponent } from './confirm-end-term.component';

describe('ConfirmEndTermComponent', () => {
  let component: ConfirmEndTermComponent;
  let fixture: ComponentFixture<ConfirmEndTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmEndTermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmEndTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
