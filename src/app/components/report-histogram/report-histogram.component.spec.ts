import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHistogramComponent } from './report-histogram.component';

describe('ReportHistogramComponent', () => {
  let component: ReportHistogramComponent;
  let fixture: ComponentFixture<ReportHistogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHistogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
