import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSaveCardComponent } from './confirmation-save-card.component';

describe('ConfirmationSaveCardComponent', () => {
  let component: ConfirmationSaveCardComponent;
  let fixture: ComponentFixture<ConfirmationSaveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationSaveCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationSaveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
