import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EacDetailsComponent } from './eac-details.component';

describe('EacDetailsComponent', () => {
  let component: EacDetailsComponent;
  let fixture: ComponentFixture<EacDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EacDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EacDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
