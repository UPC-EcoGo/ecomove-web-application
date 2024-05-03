import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookRegisterComponent } from './facebook-register.component';

describe('FacebookRegisterComponent', () => {
  let component: FacebookRegisterComponent;
  let fixture: ComponentFixture<FacebookRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacebookRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
