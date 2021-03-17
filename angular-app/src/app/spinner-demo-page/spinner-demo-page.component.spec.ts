import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerDemoPageComponent } from './spinner-demo-page.component';

describe('SpinnerDemoPageComponent', () => {
  let component: SpinnerDemoPageComponent;
  let fixture: ComponentFixture<SpinnerDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
