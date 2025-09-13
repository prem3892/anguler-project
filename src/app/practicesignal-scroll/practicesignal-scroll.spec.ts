import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesignalScroll } from './practicesignal-scroll';

describe('PracticesignalScroll', () => {
  let component: PracticesignalScroll;
  let fixture: ComponentFixture<PracticesignalScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticesignalScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticesignalScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
