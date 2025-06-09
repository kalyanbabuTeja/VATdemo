import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityTaxDetailsComponent } from './liability-tax-details.component';

describe('LiabilityTaxDetailsComponent', () => {
  let component: LiabilityTaxDetailsComponent;
  let fixture: ComponentFixture<LiabilityTaxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiabilityTaxDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiabilityTaxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
