import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personalprojects } from './personalprojects';

describe('Personalprojects', () => {
  let component: Personalprojects;
  let fixture: ComponentFixture<Personalprojects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personalprojects],
    }).compileComponents();

    fixture = TestBed.createComponent(Personalprojects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
