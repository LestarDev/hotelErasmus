import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCommentsComponent } from './slider-comments.component';

describe('SliderCommentsComponent', () => {
  let component: SliderCommentsComponent;
  let fixture: ComponentFixture<SliderCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
