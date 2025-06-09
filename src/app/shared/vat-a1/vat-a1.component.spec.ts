import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatA1Component } from './vat-a1.component';

describe('VatA1Component', () => {
  let component: VatA1Component;
  let fixture: ComponentFixture<VatA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatA1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VatA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
