import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingDemoPageComponent } from './lazy-loading-demo-page.component';

describe('LazyLoadingDemoPageComponent', () => {
  let component: LazyLoadingDemoPageComponent;
  let fixture: ComponentFixture<LazyLoadingDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
