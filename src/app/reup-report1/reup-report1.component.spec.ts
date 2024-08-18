import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReupReport1Component } from './reup-report1.component';

describe('ReupReport1Component', () => {
  let component: ReupReport1Component;
  let fixture: ComponentFixture<ReupReport1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReupReport1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReupReport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
