import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAuthDetailsComponent } from './person-auth-details.component';

describe('PersonAuthDetailsComponent', () => {
  let component: PersonAuthDetailsComponent;
  let fixture: ComponentFixture<PersonAuthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAuthDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonAuthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
