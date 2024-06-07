import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpReviewPageComponent } from './up-review-page.component';

describe('UpReviewPageComponent', () => {
  let component: UpReviewPageComponent;
  let fixture: ComponentFixture<UpReviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpReviewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
