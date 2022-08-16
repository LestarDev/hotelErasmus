import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestOptionComponent } from './guest-option.component';

describe('GuestOptionComponent', () => {
  let component: GuestOptionComponent;
  let fixture: ComponentFixture<GuestOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
