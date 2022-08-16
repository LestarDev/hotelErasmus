import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkVirtualScrollHorizontalExampleComponent } from './cdk-virtual-scroll-horizontal-example.component';

describe('CdkVirtualScrollHorizontalExampleComponent', () => {
  let component: CdkVirtualScrollHorizontalExampleComponent;
  let fixture: ComponentFixture<CdkVirtualScrollHorizontalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkVirtualScrollHorizontalExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkVirtualScrollHorizontalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
