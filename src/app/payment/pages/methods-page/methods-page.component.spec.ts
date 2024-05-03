import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsPageComponent } from './methods-page.component';

describe('MethodsPageComponent', () => {
  let component: MethodsPageComponent;
  let fixture: ComponentFixture<MethodsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MethodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
