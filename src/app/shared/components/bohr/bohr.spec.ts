import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bohr } from './bohr';

describe('Bohr', () => {
  let component: Bohr;
  let fixture: ComponentFixture<Bohr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bohr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bohr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
