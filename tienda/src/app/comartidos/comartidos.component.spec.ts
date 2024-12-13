import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComartidosComponent } from './comartidos.component';

describe('ComartidosComponent', () => {
  let component: ComartidosComponent;
  let fixture: ComponentFixture<ComartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComartidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
