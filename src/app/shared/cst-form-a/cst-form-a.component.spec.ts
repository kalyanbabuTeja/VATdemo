import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstFormAComponent } from './cst-form-a.component';

describe('CstFormAComponent', () => {
  let component: CstFormAComponent;
  let fixture: ComponentFixture<CstFormAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CstFormAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CstFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
