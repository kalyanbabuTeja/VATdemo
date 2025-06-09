import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexure6Component } from './annexure6.component';

describe('Annexure6Component', () => {
  let component: Annexure6Component;
  let fixture: ComponentFixture<Annexure6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Annexure6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annexure6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
