import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemoPageComponent } from './button-demo-page.component';

describe('ButtonDemoPageComponent', () => {
  let component: ButtonDemoPageComponent;
  let fixture: ComponentFixture<ButtonDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
