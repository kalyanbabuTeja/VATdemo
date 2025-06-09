import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexure5Component } from './annexure5.component';

describe('Annexure5Component', () => {
  let component: Annexure5Component;
  let fixture: ComponentFixture<Annexure5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Annexure5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annexure5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
