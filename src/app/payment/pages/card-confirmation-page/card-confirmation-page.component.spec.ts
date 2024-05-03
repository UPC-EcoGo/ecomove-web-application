import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfirmationPageComponent } from './card-confirmation-page.component';

describe('CardConfirmationPageComponent', () => {
  let component: CardConfirmationPageComponent;
  let fixture: ComponentFixture<CardConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConfirmationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
