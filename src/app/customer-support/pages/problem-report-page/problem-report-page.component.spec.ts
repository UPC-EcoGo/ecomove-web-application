import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemReportPageComponent } from './problem-report-page.component';

describe('ProblemReportPageComponent', () => {
  let component: ProblemReportPageComponent;
  let fixture: ComponentFixture<ProblemReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemReportPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
