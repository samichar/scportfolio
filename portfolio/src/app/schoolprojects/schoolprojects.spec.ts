import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Schoolprojects } from './schoolprojects';

describe('Schoolprojects', () => {
  let component: Schoolprojects;
  let fixture: ComponentFixture<Schoolprojects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Schoolprojects],
    }).compileComponents();

    fixture = TestBed.createComponent(Schoolprojects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
