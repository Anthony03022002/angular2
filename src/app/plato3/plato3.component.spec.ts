import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plato3Component } from './plato3.component';

describe('Plato3Component', () => {
  let component: Plato3Component;
  let fixture: ComponentFixture<Plato3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plato3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plato3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
