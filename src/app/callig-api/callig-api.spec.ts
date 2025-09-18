import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalligApi } from './callig-api';

describe('CalligApi', () => {
  let component: CalligApi;
  let fixture: ComponentFixture<CalligApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalligApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalligApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
