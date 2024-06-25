import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationReportPageComponent } from './confirmation-report-page.component';

describe('ConfirmationReportPageComponent', () => {
  let component: ConfirmationReportPageComponent;
  let fixture: ComponentFixture<ConfirmationReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationReportPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
