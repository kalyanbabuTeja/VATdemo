import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAssetsComponent } from './business-assets.component';

describe('BusinessAssetsComponent', () => {
  let component: BusinessAssetsComponent;
  let fixture: ComponentFixture<BusinessAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
