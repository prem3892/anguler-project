import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topticker } from './topticker';

describe('Topticker', () => {
  let component: Topticker;
  let fixture: ComponentFixture<Topticker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topticker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topticker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
