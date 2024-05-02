import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationReservationComponent } from './confirmation-reservation.component';

describe('ConfirmationReservationComponent', () => {
  let component: ConfirmationReservationComponent;
  let fixture: ComponentFixture<ConfirmationReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationReservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
