import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationReviewPageComponent } from './confirmation-review-page.component';

describe('ConfirmationReviewPageComponent', () => {
  let component: ConfirmationReviewPageComponent;
  let fixture: ComponentFixture<ConfirmationReviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationReviewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
