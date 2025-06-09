import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBankDetailsComponent } from './business-bank-details.component';

describe('BusinessBankDetailsComponent', () => {
  let component: BusinessBankDetailsComponent;
  let fixture: ComponentFixture<BusinessBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessBankDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
