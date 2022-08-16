import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderVerticalComponent } from './slider-vertical.component';

describe('SliderVerticalComponent', () => {
  let component: SliderVerticalComponent;
  let fixture: ComponentFixture<SliderVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
