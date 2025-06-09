import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePermitCommencementDetailsComponent } from './license-permit-commencement-details.component';

describe('LicensePermitCommencementDetailsComponent', () => {
  let component: LicensePermitCommencementDetailsComponent;
  let fixture: ComponentFixture<LicensePermitCommencementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicensePermitCommencementDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePermitCommencementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
