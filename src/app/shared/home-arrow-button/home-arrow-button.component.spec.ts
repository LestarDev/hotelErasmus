import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArrowButtonComponent } from './home-arrow-button.component';

describe('HomeArrowButtonComponent', () => {
  let component: HomeArrowButtonComponent;
  let fixture: ComponentFixture<HomeArrowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeArrowButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
