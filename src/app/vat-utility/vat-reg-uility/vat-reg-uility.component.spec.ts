import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatRegUilityComponent } from './vat-reg-uility.component';

describe('VatRegUilityComponent', () => {
  let component: VatRegUilityComponent;
  let fixture: ComponentFixture<VatRegUilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatRegUilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VatRegUilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
