import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReupReport2Component } from './reup-report2.component';

describe('ReupReport2Component', () => {
  let component: ReupReport2Component;
  let fixture: ComponentFixture<ReupReport2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReupReport2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReupReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
