import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRegisterPageComponent } from './confirmation-register-page.component';

describe('ConfirmationRegisterPageComponent', () => {
  let component: ConfirmationRegisterPageComponent;
  let fixture: ComponentFixture<ConfirmationRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
