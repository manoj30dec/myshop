import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFooter } from './prime-footer';

describe('Footer', () => {
  let component: PrimeFooter;
  let fixture: ComponentFixture<PrimeFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeFooter]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PrimeFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
