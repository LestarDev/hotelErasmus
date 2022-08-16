import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowToSliderComponent } from './arrow-to-slider.component';

describe('ArrowToSliderComponent', () => {
  let component: ArrowToSliderComponent;
  let fixture: ComponentFixture<ArrowToSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowToSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowToSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
