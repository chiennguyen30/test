import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmStartTermComponent } from './confirm-start-term.component';

describe('ConfirmStartTermComponent', () => {
  let component: ConfirmStartTermComponent;
  let fixture: ComponentFixture<ConfirmStartTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmStartTermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmStartTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
