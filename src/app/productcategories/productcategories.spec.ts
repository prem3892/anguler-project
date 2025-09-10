import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productcategories } from './productcategories';

describe('Productcategories', () => {
  let component: Productcategories;
  let fixture: ComponentFixture<Productcategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productcategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productcategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
